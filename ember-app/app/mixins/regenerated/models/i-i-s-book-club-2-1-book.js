import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  cover: DS.attr('file'),
  tags: DS.attr('string'),
  description: DS.attr('string'),
  rating: DS.attr('decimal')
});

export let ValidationRules = {
  title: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.title.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pages: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.pages.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  cover: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.cover.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  rating: {
    descriptionKey: 'models.i-i-s-book-club-2-1-book.validations.rating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-book-club-2-1-book', {
    title: attr('Заголовок', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    pages: attr('Количество страниц', { index: 2 }),
    cover: attr('Обложка', { index: 3 }),
    tags: attr('Теги', { index: 4 }),
    description: attr('Описание (url)', { index: 5 }),
    rating: attr('Средняя оценка', { index: 6 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-book-club-2-1-book', {
    title: attr('Заголовок', { index: 1 }),
    author: attr('Автор', { index: 2 }),
    pages: attr('Количество страниц', { index: 3 }),
    cover: attr('Обложка', { index: 0 }),
    tags: attr('Теги', { index: 4 }),
    description: attr('Описание', { index: 5 }),
    rating: attr('Средняя оценка', { index: 6 })
  });
};
