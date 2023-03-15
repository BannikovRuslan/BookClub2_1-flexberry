import Component from '@ember/component';

export default Component.extend({

    presentations: null,
    
    async didReceiveAttrs() {
        this._super(...arguments);
        let model = this.relatedModel;
        this.set("meetingDate", model.date);
        let modelPresentations = model.presentation.canonicalState;

        this.presentations =[];
        for (let i = 0; i < modelPresentations.length; i++) {
            this.presentations.push({
                speakerFullName: modelPresentations[i]._record.speaker.fullName,
                bookAuthor: modelPresentations[i]._record.book.author,
                bookTitle: modelPresentations[i]._record.book.title
            });   
        }
    },
});
