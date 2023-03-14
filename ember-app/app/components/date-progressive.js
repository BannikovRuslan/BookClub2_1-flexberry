import Component from 'ember-flexberry/components/flexberry-simpledatetime';

export default Component.extend({
    actions: {
        onChange: function(component) {
            this.relatedModel.presentation.forEach(p => p.set("date", this.relatedModel.date));
        },
    }
});
