import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';

import FilterOperator from 'ember-flexberry-data/query/filter-operator';
import Builder from 'ember-flexberry-data/query/builder';

import MultiListRoute from 'ember-flexberry/mixins/multi-list-route';
import MultiListModelEdit from 'ember-flexberry/mixins/multi-list-model-edit';
import ListParameters from 'ember-flexberry/objects/list-parameters';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'MeetingL'
  */
  modelProjection: 'MeetingE',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-i-s-book-club-2-1-meeting'
  */
  modelName: 'i-i-s-book-club-2-1-meeting',

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
    return { IISBookClub_2_1MeetingL: {
      "DEFAULT": {
        "columnWidths": [
          {
            "propName": "OlvRowToolbar",
            "width": 150
          }
        ]
      }
    } }
  }),

});
