import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import { computed } from '@ember/object';

import {
  defineProjections,
  ValidationRules,
  Model as SpeakerMixin
} from '../mixins/regenerated/models/i-i-s-book-club-2-1-speaker';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(SpeakerMixin, Validations, {
  fullName: computed('lastName', 'firstName', 'middleName', function() {
    let lastName = this.get('lastName');
    let firstName = this.get('firstName');
    let middleName = this.get('middleName');

    return `${lastName} ${firstName} ${middleName}`;
  }),

});

defineProjections(Model);

export default Model;
