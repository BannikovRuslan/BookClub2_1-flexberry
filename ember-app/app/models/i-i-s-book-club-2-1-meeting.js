import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as MeetingMixin
} from '../mixins/regenerated/models/i-i-s-book-club-2-1-meeting';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(MeetingMixin, Validations, {
});

defineProjections(Model);

export default Model;
