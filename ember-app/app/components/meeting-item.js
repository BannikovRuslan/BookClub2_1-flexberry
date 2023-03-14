import Component from '@ember/component';
//import Component from 'ember-flexberry/components/flexberry-field';
// import Component from 'ember-flexberry/components/flexberry-simpledatetime';

export default Component.extend({
    async didReceiveAttrs() {
        this._super(...arguments);
        let model = this.relatedModel;
        this.set("meetingDate", model.date);
        this.set("presentations", model.presentation.canonicalState);
        // let model = this.relatedModel;
        // let modelName = this.get('dynamicProperties.modelName') ? this.get('dynamicProperties.modelName') : undefined;
        // let projectionName = this.get('dynamicProperties.modelProjection') ? this.get('dynamicProperties.modelProjection') : undefined;
        
        // this.set('developerUserSettings', {});

        // this.set("modelProjection", "MeetingE");
        // this.set("model", model);
        // this.set("modelName", 'i-i-s-book-club-2-1-meeting');
        // this.set("meetingDate", model.date);
        // this.set("componentName","presentationGroupEdit"+model.id);
        // this.set("getCellComponent", this.getCellComponent);


        // let presentations = model.presentation.record.presentation.content;
        //p[0]._record.speaker.fullName
        // this.set('developerUserSettings', {});
        
        // let olvName = "olvSpeakerMeetings";

        // this.set('multiListSettings.' + olvName, new ListParameters({
        //     objectlistviewEvents: this.get('objectlistviewEvents'),
        //     componentName: olvName,
        //     modelName: modelName,
        //     projectionName: projectionName,
        //     content: presentations
        // }));

        // this.multiListSettings.olvSpeakerMeetings.set("content", presentations);

        // this.setProperties({
        //     content: model.content,
        //     modelName: modelName,
        //     modelProjection: this.get('dynamicProperties.modelProjection') ? this.get('dynamicProperties.modelProjection') : undefined,
        //     meetingDate: this.get("attrs.value.value"),
        // });
    },


});
