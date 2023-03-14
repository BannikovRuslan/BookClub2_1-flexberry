import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

import { defaultSpeakerFoto } from '../../../utils/default-data';

export let Model = Mixin.create({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string'),
  foto: DS.attr('file-with-default', {default: defaultSpeakerFoto}),
  /**
    Non-stored property.

    @property fullName
  */
  fullName: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'fullNameCompute' method in model class (outside of this mixin) if you want to compute value of 'fullName' property.

    @method _fullNameCompute
    @private
    @example
      ```javascript
      _fullNameChanged: on('init', observer('fullName', function() {
        once(this, '_fullNameCompute');
      }))
      ```
  */
  _fullNameCompute: function() {
    let result = (this.fullNameCompute && typeof this.fullNameCompute === 'function') ? this.fullNameCompute() : null;
    this.set('fullName', result);
  }
});

export let ValidationRules = {
  firstName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  foto: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.foto.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  fullName: {
    descriptionKey: 'models.i-i-s-book-club-2-1-speaker.validations.fullName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpeakerE', 'i-i-s-book-club-2-1-speaker', {
    foto: attr('Фотография', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    firstName: attr('Имя', { index: 2 }),
    middleName: attr('Отчество', { index: 3 })
  });

  modelClass.defineProjection('SpeakerFull', 'i-i-s-book-club-2-1-speaker', {
    foto: attr('', { index: 0 }),
    lastName: attr('', { index: 1 }),
    firstName: attr('', { index: 2 }),
    middleName: attr('', { index: 3 }),
    fullName: attr('', { index: 4 })
  });

  modelClass.defineProjection('SpeakerFullShort', 'i-i-s-book-club-2-1-speaker', {
    foto: attr('', { index: 0 }),
    fullName: attr('', { index: 1 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-book-club-2-1-speaker', {
    foto: attr('Фотография', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    firstName: attr('Имя', { index: 2 }),
    middleName: attr('Отчество', { index: 3 })
  });
};
