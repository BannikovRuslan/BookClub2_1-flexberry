export default {
  projections: {
    MeetingE: {
      date: {
        __caption__: 'Дата Встречи'
      },
      presentation: {
        __caption__: 'Presentation',
        date: {
          __caption__: 'Дата Доклада'
        },
        rating: {
          __caption__: 'Оценка книги'
        },
        urlPresentation: {
          __caption__: 'Презентация (url)'
        },
        urlVideo: {
          __caption__: 'Видео (url)'
        },
        review: {
          __caption__: 'Рецензия'
        },
        speaker: {
          __caption__: 'Спикер',
          firstName: {
            __caption__: '~'
          },
          middleName: {
            __caption__: '~'
          },
          lastName: {
            __caption__: '~'
          }
        },
        book: {
          __caption__: 'Книга',
          title: {
            __caption__: '~'
          }
        }
      }
    },
    MeetingL: {
      date: {
        __caption__: 'Дата Встречи'
      }
    }
  },
  validations: {
    date: {
      __caption__: 'Дата Встречи'
    },
    presentation: {
      __caption__: 'Presentation'
    }
  }
};
