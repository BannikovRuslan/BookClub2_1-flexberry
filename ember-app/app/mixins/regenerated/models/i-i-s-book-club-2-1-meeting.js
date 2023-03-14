import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  date: DS.attr('date'),
  presentation: DS.hasMany('i-i-s-book-club-2-1-presentation', { inverse: 'meeting', async: false })
});

export let ValidationRules = {
  date: {
    descriptionKey: 'models.i-i-s-book-club-2-1-meeting.validations.date.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  presentation: {
    descriptionKey: 'models.i-i-s-book-club-2-1-meeting.validations.presentation.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeetingE', 'i-i-s-book-club-2-1-meeting', {
    date: attr('Дата Встречи', { index: 0 }),
    presentation: hasMany('i-i-s-book-club-2-1-presentation', 'Presentation', {
      date: attr('Дата Доклада', { index: 0 }),
      rating: attr('Оценка книги', { index: 1 }),
      urlPresentation: attr('Презентация (url)', { index: 2 }),
      urlVideo: attr('Видео (url)', { index: 3 }),
      review: attr('Рецензия', { index: 4 }),
      speaker: belongsTo('i-i-s-book-club-2-1-speaker', 'Спикер', {
        firstName: attr('~', { index: 6, hidden: true }),
        middleName: attr('~', { index: 7, hidden: true }),
        lastName: attr('~', { index: 8, hidden: true })
      }, { index: 5, displayMemberPath: 'fullName' }),
      book: belongsTo('i-i-s-book-club-2-1-book', 'Книга', {
        title: attr('~', { index: 10, hidden: true }),
        author: attr('~', { index: 11, hidden: true }),
      }, { index: 9, displayMemberPath: 'title' })
    })
  });

  modelClass.defineProjection('MeetingL', 'i-i-s-book-club-2-1-meeting', {
    date: attr('Дата Встречи', { index: 0 })
  });
};
