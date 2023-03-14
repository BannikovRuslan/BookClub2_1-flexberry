import EditFormController from 'ember-flexberry/controllers/edit-form';

import { defaultFotoComponent } from '../utils/default-data';

export default EditFormController.extend({
  parentRoute: 'i-i-s-book-club-2-1-meeting-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-book-club-2-1-presentation+speaker':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'fullName',
            required: true,
            relationName: 'speaker',
            projection: 'SpeakerL',
            autocomplete: true,
            lookupWindowCustomProperties: () => {
              this.lookupController.getCellComponent = (attr, bindingPath, model) => {
                let cellComponent = this._super(...arguments);
                if (bindingPath == "foto") {
                  cellComponent = defaultFotoComponent;
                }
                return cellComponent;
              };
                           
            }
          };
          break;

        case 'i-i-s-book-club-2-1-presentation+book':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'title',
            required: true,
            relationName: 'book',
            projection: 'BookL',
            autocomplete: true,
            lookupWindowCustomProperties: () => {
              this.lookupController.getCellComponent = (attr, bindingPath, model) => {
                let cellComponent = this._super(...arguments);
                if (bindingPath == "cover") {
                  cellComponent = defaultFotoComponent;
                }
                return cellComponent;
              };
              
              // this.lookupController.developerUserSettings = function() {
              //   return { IISBookClub_2_1BookL: {
              //     "DEFAULT": {
              //       "columnWidths": [
              //         {
              //           "propName": "OlvRowToolbar",
              //           "width": 200
              //         },
              //       ],
              //     }
              //   } }
              // };
                          
            }
          };
          break;

      }
    }

    return cellComponent;
  },
});
