import ListFormController from 'ember-flexberry/controllers/list-form';

import FilterOperator from 'ember-flexberry-data/query/filter-operator';
import { StringPredicate, ComplexPredicate, DetailPredicate, SimplePredicate, DatePredicate } from 'ember-flexberry-data/query/predicate';
import Condition from 'ember-flexberry-data/query/condition';

import Builder from 'ember-flexberry-data/query/builder';
import { computed } from '@ember/object';

export default ListFormController.extend( {
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-i-s-book-club-2-1-meeting-e'
   */
  editFormRoute: 'i-i-s-book-club-2-1-meeting-e',

  searchMeetingDate: "",
  searchSpeaker: "",
  searchBook: "",

  getCellComponent: function(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (model == undefined) 
    {
      return cellComponent;
    }
 
    let modelName = "i-i-s-book-club-2-1-meeting";
    let modelProjection = "MeetingL";
 
    this.set('developerUserSettings', {IISBookClub_2_1MeetingL: {
      "DEFAULT": {
        "columnWidths": [
          {
            "propName": "OlvRowToolbar",
            "width": 150
          }
        ]
      }
    }});
    
    cellComponent.componentName = "meeting-item";
    // cellComponent.componentProperties = {
    //   modelName: modelName,
    //   modelProjection: modelProjection,
    //   content: this.content,
    //   cellComponent: {componentName: "meeting-item"}
    // }

    return cellComponent;
  },

  actions: {
    deleteRow(row, x, y) {
      console.log(row);
    },

    async onFilterButtonClick() {
      // let t = new Builder(this.store).from(this.modelName).count();
      // let total = await this.store.query(this.modelName, t.build());

      let date = this.searchMeetingDate;
      let speaker = this.searchSpeaker;
      let book = this.searchBook;

      let mainPredicate = null;
      if (date) {
        mainPredicate = new DatePredicate("date", FilterOperator.Eq, date);
      }
      
      let speakerPredicate = null;
      if (speaker) {
        const spFirstName = new StringPredicate('speaker.firstName').contains(speaker);
        const spLastName = new StringPredicate('speaker.lastName').contains(speaker);
        const spMiddleName = new StringPredicate('speaker.middleName').contains(speaker);
        speakerPredicate = new DetailPredicate('presentation').all(new ComplexPredicate(Condition.Or, spFirstName, spLastName, spMiddleName));
        if (mainPredicate) {
          mainPredicate = new ComplexPredicate(Condition.And, mainPredicate, speakerPredicate);
        }
        else {
          mainPredicate = speakerPredicate;
        }
      }

      let bookPredicate = null;
      if (book) {
        bookPredicate = new DetailPredicate('presentation').all(new StringPredicate('book.title').contains(book));
        if (mainPredicate) {
          mainPredicate = new ComplexPredicate(Condition.And, mainPredicate, bookPredicate);
        } 
        else {
          mainPredicate = bookPredicate;
        }
      }
      
      let modelProjection = this.modelProjection.projectionName;
      let modelName = this.modelProjection.modelName;

      let m = new Builder(this.get("store"))
                  .from(modelName)
                  .selectByProjection(modelProjection);
      
      if(mainPredicate) {
        m = m.where(mainPredicate);
      }
      
      let meetings = await this.get("store").query(modelName, m.build());
      this.set("recordsTotalCount", meetings.length);
            
      m = m.skip(this.perPage * (this.page - 1)).top(5);

      meetings = await this.get("store").query(modelName, m.build());
      this.set("model", meetings);

    },
    async onClearFilterButtonClick() {
      this.set("searchMeetingDate", "");
      this.set("searchSpeaker", "");
      this.set("searchBook", "");

      let modelProjection = this.modelProjection.projectionName;
      let modelName = this.modelProjection.modelName;
      let m = new Builder(this.get("store"))
                  .from(modelName)
                  .selectByProjection(modelProjection);
      
      let meetings = await this.get("store").query(modelName, m.build());
      this.set("recordsTotalCount", meetings.length);

      m = m.skip(this.perPage * (this.page - 1)).top(5);
      meetings = await this.get("store").query(modelName, m.build());
      
      this.set("model", meetings);
    }
  }
});
