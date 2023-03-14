import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-book-club-2-1-speaker-l',

  actions: {
    rowClick(model, content) {
      switch (content.modelName) {
        case "i-i-s-book-club-2-1-presentation":
          this.transitionToRoute(content.editFormRoute, model.meeting.id);
          break;
      
        default:
          break;
      }
    }
  }
});
