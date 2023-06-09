import ListFormController from 'ember-flexberry/controllers/list-form';

import { defaultFotoComponent } from '../utils/default-data';

export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-i-s-book-club-2-1-speaker-e'
   */
  editFormRoute: 'i-i-s-book-club-2-1-speaker-e',

  getCellComponent: function(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (bindingPath == "foto") {
      cellComponent = defaultFotoComponent;
    }

    return cellComponent;
  },
});
