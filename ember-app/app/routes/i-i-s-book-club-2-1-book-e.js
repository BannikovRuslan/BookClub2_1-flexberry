import EditFormRoute from 'ember-flexberry/routes/edit-form';

import MultiListRoute from 'ember-flexberry/mixins/multi-list-route';
import MultiListModelEdit from 'ember-flexberry/mixins/multi-list-model-edit';
import ListParameters from 'ember-flexberry/objects/list-parameters';

import FilterOperator from 'ember-flexberry-data/query/filter-operator';
import Builder from 'ember-flexberry-data/query/builder';

export default EditFormRoute.extend(MultiListRoute, MultiListModelEdit, {
  modelProjection: 'BookE',
  modelName: 'i-i-s-book-club-2-1-book',

  async init() {
    this._super(...arguments);

    this.set('developerUserSettings', {});

    this.set('multiListSettings.olvSpeakerMeetings', new ListParameters({
      objectlistviewEvents: this.get('objectlistviewEvents'),
      componentName: 'olvSpeakerMeetings',
      modelName: 'i-i-s-book-club-2-1-presentation',
      projectionName: 'PresentationBook',
      editFormRoute: 'i-i-s-book-club-2-1-meeting-e', 
         
    }));
  },

  async afterModel(model, transition) {
    let p = new Builder(this.store)
                .from("i-i-s-book-club-2-1-presentation")
                .selectByProjection("PresentationBook")
                .where("book.id", FilterOperator.Eq, model.id);

    let meetings = await this.store.query('i-i-s-book-club-2-1-presentation', p.build());
    this.multiListSettings.olvSpeakerMeetings.set("model", meetings);
  },
});
