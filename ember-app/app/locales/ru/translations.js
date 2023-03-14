import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISBookClub_2_1BookLForm from './forms/i-i-s-book-club-2-1-book-l';
import IISBookClub_2_1MeetingLForm from './forms/i-i-s-book-club-2-1-meeting-l';
import IISBookClub_2_1SpeakerLForm from './forms/i-i-s-book-club-2-1-speaker-l';
import IISBookClub_2_1BookEForm from './forms/i-i-s-book-club-2-1-book-e';
import IISBookClub_2_1MeetingEForm from './forms/i-i-s-book-club-2-1-meeting-e';
import IISBookClub_2_1SpeakerEForm from './forms/i-i-s-book-club-2-1-speaker-e';
import IISBookClub_2_1BookModel from './models/i-i-s-book-club-2-1-book';
import IISBookClub_2_1MeetingModel from './models/i-i-s-book-club-2-1-meeting';
import IISBookClub_2_1PresentationModel from './models/i-i-s-book-club-2-1-presentation';
import IISBookClub_2_1SpeakerModel from './models/i-i-s-book-club-2-1-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-book-club-2-1-book': IISBookClub_2_1BookModel,
    'i-i-s-book-club-2-1-meeting': IISBookClub_2_1MeetingModel,
    'i-i-s-book-club-2-1-presentation': IISBookClub_2_1PresentationModel,
    'i-i-s-book-club-2-1-speaker': IISBookClub_2_1SpeakerModel
  },

  'application-name': 'Книжный клуб',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Книжный клуб',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб',
          title: 'Книжного клуба описание'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'i-i-s-book-club-2-1-book-l': {
          caption: 'Книги',
          title: ''
        },
        'i-i-s-book-club-2-1-speaker-l': {
          caption: 'Спикеры',
          title: ''
        },
        'i-i-s-book-club-2-1-meeting-l': {
          caption: 'Встречи',
          title: ''
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-book-club-2-1-book-l': IISBookClub_2_1BookLForm,
    'i-i-s-book-club-2-1-meeting-l': IISBookClub_2_1MeetingLForm,
    'i-i-s-book-club-2-1-speaker-l': IISBookClub_2_1SpeakerLForm,
    'i-i-s-book-club-2-1-book-e': IISBookClub_2_1BookEForm,
    'i-i-s-book-club-2-1-meeting-e': IISBookClub_2_1MeetingEForm,
    'i-i-s-book-club-2-1-speaker-e': IISBookClub_2_1SpeakerEForm
  },

  extra: {
    'toggler-caption-book-info': 'Информация по книге'
  }

});

export default translations;
