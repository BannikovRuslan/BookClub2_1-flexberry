﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.BookClub_2_1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Доклада описание.
    /// </summary>
    // *** Start programmer edit section *** (Presentation CustomAttributes)

    // *** End programmer edit section *** (Presentation CustomAttributes)
    [PrimaryKeyStorage("Id")]
    [AutoAltered()]
    [Caption("Доклад")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PresentationBook", new string[] {
            "Date as \'Дата\'",
            "Speaker.LastName as \'Фамилия\'",
            "Speaker.FirstName as \'Имя\'",
            "Speaker.MiddleName as \'Отчество\'",
            "Meeting.Date"}, Hidden=new string[] {
            "Meeting.Date"})]
    [View("PresentationE", new string[] {
            "Date as \'Дата Доклада\'",
            "Rating as \'Оценка книги\'",
            "UrlPresentation as \'Презентация (url)\'",
            "UrlVideo as \'Видео (url)\'",
            "Review as \'Рецензия\'",
            "Speaker as \'Спикер\'",
            "Speaker.FirstName as \'\'",
            "Speaker.MiddleName as \'\'",
            "Speaker.LastName as \'\'",
            "Book as \'Книга\'",
            "Book.Title as \'\'"}, Hidden=new string[] {
            "Speaker.FirstName",
            "Speaker.MiddleName",
            "Speaker.LastName",
            "Book.Title"})]
    [MasterViewDefineAttribute("PresentationE", "Speaker", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "fullName")]
    [MasterViewDefineAttribute("PresentationE", "Book", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Title")]
    [View("PresentationMeeting", new string[] {
            "Date as \'Дата\'",
            "Speaker.fullName as \'Спикер\'",
            "Book.Title as \'Книга\'",
            "Book.Author as \'Автор\'",
            "Speaker.FirstName as \'\'",
            "Speaker.LastName as \'\'",
            "Speaker.MiddleName as \'\'"}, Hidden=new string[] {
            "Speaker.FirstName",
            "Speaker.LastName",
            "Speaker.MiddleName"})]
    [View("PresentationSpeaker", new string[] {
            "Date as \'Дата выступления\'",
            "Book.Title as \'Заголовок\'",
            "Book.Author as \'Автор\'",
            "Book.Description as \'Описание / ссылка\'",
            "Meeting.Date"}, Hidden=new string[] {
            "Meeting.Date"})]
    public class Presentation : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fDate;
        
        private int fRating;
        
        private string fUrlPresentation;
        
        private string fUrlVideo;
        
        private string fReview;
        
        private IIS.BookClub_2_1.Book fBook;
        
        private IIS.BookClub_2_1.Speaker fSpeaker;
        
        private IIS.BookClub_2_1.Meeting fMeeting;
        
        // *** Start programmer edit section *** (Presentation CustomMembers)

        // *** End programmer edit section *** (Presentation CustomMembers)

        
        /// <summary>
        /// Date.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.Date CustomAttributes)

        // *** End programmer edit section *** (Presentation.Date CustomAttributes)
        public virtual System.DateTime Date
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.Date Get start)

                // *** End programmer edit section *** (Presentation.Date Get start)
                System.DateTime result = this.fDate;
                // *** Start programmer edit section *** (Presentation.Date Get end)

                // *** End programmer edit section *** (Presentation.Date Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.Date Set start)

                // *** End programmer edit section *** (Presentation.Date Set start)
                this.fDate = value;
                // *** Start programmer edit section *** (Presentation.Date Set end)

                // *** End programmer edit section *** (Presentation.Date Set end)
            }
        }
        
        /// <summary>
        /// Rating.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.Rating CustomAttributes)

        // *** End programmer edit section *** (Presentation.Rating CustomAttributes)
        public virtual int Rating
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.Rating Get start)

                // *** End programmer edit section *** (Presentation.Rating Get start)
                int result = this.fRating;
                // *** Start programmer edit section *** (Presentation.Rating Get end)

                // *** End programmer edit section *** (Presentation.Rating Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.Rating Set start)

                // *** End programmer edit section *** (Presentation.Rating Set start)
                this.fRating = value;
                // *** Start programmer edit section *** (Presentation.Rating Set end)

                // *** End programmer edit section *** (Presentation.Rating Set end)
            }
        }
        
        /// <summary>
        /// UrlPresentation.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.UrlPresentation CustomAttributes)

        // *** End programmer edit section *** (Presentation.UrlPresentation CustomAttributes)
        [StrLen(255)]
        public virtual string UrlPresentation
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.UrlPresentation Get start)

                // *** End programmer edit section *** (Presentation.UrlPresentation Get start)
                string result = this.fUrlPresentation;
                // *** Start programmer edit section *** (Presentation.UrlPresentation Get end)

                // *** End programmer edit section *** (Presentation.UrlPresentation Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.UrlPresentation Set start)

                // *** End programmer edit section *** (Presentation.UrlPresentation Set start)
                this.fUrlPresentation = value;
                // *** Start programmer edit section *** (Presentation.UrlPresentation Set end)

                // *** End programmer edit section *** (Presentation.UrlPresentation Set end)
            }
        }
        
        /// <summary>
        /// UrlVideo.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.UrlVideo CustomAttributes)

        // *** End programmer edit section *** (Presentation.UrlVideo CustomAttributes)
        [StrLen(255)]
        public virtual string UrlVideo
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.UrlVideo Get start)

                // *** End programmer edit section *** (Presentation.UrlVideo Get start)
                string result = this.fUrlVideo;
                // *** Start programmer edit section *** (Presentation.UrlVideo Get end)

                // *** End programmer edit section *** (Presentation.UrlVideo Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.UrlVideo Set start)

                // *** End programmer edit section *** (Presentation.UrlVideo Set start)
                this.fUrlVideo = value;
                // *** Start programmer edit section *** (Presentation.UrlVideo Set end)

                // *** End programmer edit section *** (Presentation.UrlVideo Set end)
            }
        }
        
        /// <summary>
        /// Review.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.Review CustomAttributes)

        // *** End programmer edit section *** (Presentation.Review CustomAttributes)
        [StrLen(255)]
        public virtual string Review
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.Review Get start)

                // *** End programmer edit section *** (Presentation.Review Get start)
                string result = this.fReview;
                // *** Start programmer edit section *** (Presentation.Review Get end)

                // *** End programmer edit section *** (Presentation.Review Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.Review Set start)

                // *** End programmer edit section *** (Presentation.Review Set start)
                this.fReview = value;
                // *** Start programmer edit section *** (Presentation.Review Set end)

                // *** End programmer edit section *** (Presentation.Review Set end)
            }
        }
        
        /// <summary>
        /// Доклада описание.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.Book CustomAttributes)

        // *** End programmer edit section *** (Presentation.Book CustomAttributes)
        [NotNull()]
        public virtual IIS.BookClub_2_1.Book Book
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.Book Get start)

                // *** End programmer edit section *** (Presentation.Book Get start)
                IIS.BookClub_2_1.Book result = this.fBook;
                // *** Start programmer edit section *** (Presentation.Book Get end)

                // *** End programmer edit section *** (Presentation.Book Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.Book Set start)

                // *** End programmer edit section *** (Presentation.Book Set start)
                this.fBook = value;
                // *** Start programmer edit section *** (Presentation.Book Set end)

                // *** End programmer edit section *** (Presentation.Book Set end)
            }
        }
        
        /// <summary>
        /// Доклада описание.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.Speaker CustomAttributes)

        // *** End programmer edit section *** (Presentation.Speaker CustomAttributes)
        [NotNull()]
        public virtual IIS.BookClub_2_1.Speaker Speaker
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.Speaker Get start)

                // *** End programmer edit section *** (Presentation.Speaker Get start)
                IIS.BookClub_2_1.Speaker result = this.fSpeaker;
                // *** Start programmer edit section *** (Presentation.Speaker Get end)

                // *** End programmer edit section *** (Presentation.Speaker Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.Speaker Set start)

                // *** End programmer edit section *** (Presentation.Speaker Set start)
                this.fSpeaker = value;
                // *** Start programmer edit section *** (Presentation.Speaker Set end)

                // *** End programmer edit section *** (Presentation.Speaker Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.BookClub_2_1.Meeting.
        /// </summary>
        // *** Start programmer edit section *** (Presentation.Meeting CustomAttributes)

        // *** End programmer edit section *** (Presentation.Meeting CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.BookClub_2_1.Meeting Meeting
        {
            get
            {
                // *** Start programmer edit section *** (Presentation.Meeting Get start)

                // *** End programmer edit section *** (Presentation.Meeting Get start)
                IIS.BookClub_2_1.Meeting result = this.fMeeting;
                // *** Start programmer edit section *** (Presentation.Meeting Get end)

                // *** End programmer edit section *** (Presentation.Meeting Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Presentation.Meeting Set start)

                // *** End programmer edit section *** (Presentation.Meeting Set start)
                this.fMeeting = value;
                // *** Start programmer edit section *** (Presentation.Meeting Set end)

                // *** End programmer edit section *** (Presentation.Meeting Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PresentationBook" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PresentationBook
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PresentationBook", typeof(IIS.BookClub_2_1.Presentation));
                }
            }
            
            /// <summary>
            /// "PresentationE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PresentationE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PresentationE", typeof(IIS.BookClub_2_1.Presentation));
                }
            }
            
            /// <summary>
            /// "PresentationMeeting" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PresentationMeeting
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PresentationMeeting", typeof(IIS.BookClub_2_1.Presentation));
                }
            }
            
            /// <summary>
            /// "PresentationSpeaker" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PresentationSpeaker
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PresentationSpeaker", typeof(IIS.BookClub_2_1.Presentation));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Presentation.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfPresentation CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfPresentation CustomAttributes)
    public class DetailArrayOfPresentation : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.BookClub_2_1.DetailArrayOfPresentation members)

        // *** End programmer edit section *** (IIS.BookClub_2_1.DetailArrayOfPresentation members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Presentation by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Presentation.
        /// </summary>
        public DetailArrayOfPresentation(IIS.BookClub_2_1.Meeting fMeeting) : 
                base(typeof(Presentation), ((ICSSoft.STORMNET.DataObject)(fMeeting)))
        {
        }
        
        public IIS.BookClub_2_1.Presentation this[int index]
        {
            get
            {
                return ((IIS.BookClub_2_1.Presentation)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.BookClub_2_1.Presentation dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
