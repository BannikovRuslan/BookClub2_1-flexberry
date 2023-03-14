import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Книжный клуб',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб',
          title: 'Книжный клуб'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-book-club-2-1-book-l': IISBookClub_2_1BookLForm,
    'i-i-s-book-club-2-1-meeting-l': IISBookClub_2_1MeetingLForm,
    'i-i-s-book-club-2-1-speaker-l': IISBookClub_2_1SpeakerLForm,
    'i-i-s-book-club-2-1-book-e': IISBookClub_2_1BookEForm,
    'i-i-s-book-club-2-1-meeting-e': IISBookClub_2_1MeetingEForm,
    'i-i-s-book-club-2-1-speaker-e': IISBookClub_2_1SpeakerEForm
  },

});

export default translations;
