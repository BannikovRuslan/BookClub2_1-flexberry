import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';

import { StringPredicate, ComplexPredicate } from 'ember-flexberry-data/query/predicate';
import Condition from 'ember-flexberry-data/query/condition';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'SpeakerL'
  */
  modelProjection: 'SpeakerL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-i-s-book-club-2-1-speaker'
  */
  modelName: 'i-i-s-book-club-2-1-speaker',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
  */
  developerUserSettings: computed(function() {
    return { IISBookClub_2_1SpeakerL: {
      "DEFAULT": {
        "columnWidths": [
          {
            "propName": "OlvRowToolbar",
            "width": 150
          },
          {
            "propName": "foto",
            "width": 200
          },
        ]
      }
    } }
  }),

  objectListViewLimitPredicate(options) {
    
    const filter = options.params.filter;
    if (!filter) {
      return null;
    }

    let modelName = options.modelName;
    // let projectionName = options.projectionName;
    
    switch (modelName) {
      // eslint-disable-next-line no-case-declarations
      case 'i-i-s-book-club-2-1-speaker':
        const spFirstName = new StringPredicate('firstName').contains(filter);
        const spLastName = new StringPredicate('lastName').contains(filter);
        const spMiddleName = new StringPredicate('middleName').contains(filter);
        
        return new ComplexPredicate(Condition.Or, spFirstName, spLastName, spMiddleName);
      default:
        return null;
    }
  },
});
