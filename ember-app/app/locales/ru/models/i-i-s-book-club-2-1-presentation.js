export default {
  projections: {
    PresentationBook: {
      date: {
        __caption__: 'Дата'
      },
      speaker: {
        __caption__: 'Фамилия',
        lastName: {
          __caption__: 'Фамилия'
        },
        firstName: {
          __caption__: 'Имя'
        },
        middleName: {
          __caption__: 'Отчество'
        }
      },
      meeting: {
        __caption__: '',
        date: {
          __caption__: ''
        }
      }
    },
    PresentationE: {
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
    },
    PresentationMeeting: {
      date: {
        __caption__: 'Дата'
      },
      speaker: {
        __caption__: 'Спикер',
        fullName: {
          __caption__: 'Спикер'
        },
        firstName: {
          __caption__: '~'
        },
        lastName: {
          __caption__: '~'
        },
        middleName: {
          __caption__: '~'
        }
      },
      book: {
        __caption__: 'Книга',
        title: {
          __caption__: 'Книга'
        },
        author: {
          __caption__: 'Автор'
        }
      }
    },
    PresentationSpeaker: {
      date: {
        __caption__: 'Дата выступления'
      },
      book: {
        __caption__: 'Заголовок',
        title: {
          __caption__: 'Заголовок'
        },
        author: {
          __caption__: 'Автор'
        },
        description: {
          __caption__: 'Описание / ссылка'
        }
      },
      meeting: {
        __caption__: '',
        date: {
          __caption__: ''
        }
      }
    }
  },
  validations: {
    date: {
      __caption__: 'Дата'
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
      __caption__: 'Фамилия'
    },
    book: {
      __caption__: 'Книга'
    },
    meeting: {
      __caption__: 'meeting'
    }
  }
};
