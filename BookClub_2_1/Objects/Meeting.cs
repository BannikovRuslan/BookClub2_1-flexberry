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
    /// Meeting.
    /// </summary>
    // *** Start programmer edit section *** (Meeting CustomAttributes)

    // *** End programmer edit section *** (Meeting CustomAttributes)
    [PrimaryKeyStorage("Id")]
    [AutoAltered()]
    [Caption("Встреча")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("MeetingE", new string[] {
            "Date as \'Дата Встречи\'"})]
    [AssociatedDetailViewAttribute("MeetingE", "Presentation", "PresentationE", true, "", "Presentation", true, new string[] {
            ""})]
    [View("MeetingL", new string[] {
            "Date as \'Дата Встречи\'"})]
    public class Meeting : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fDate;
        
        private IIS.BookClub_2_1.DetailArrayOfPresentation fPresentation;
        
        // *** Start programmer edit section *** (Meeting CustomMembers)

        // *** End programmer edit section *** (Meeting CustomMembers)

        
        /// <summary>
        /// Date.
        /// </summary>
        // *** Start programmer edit section *** (Meeting.Date CustomAttributes)

        // *** End programmer edit section *** (Meeting.Date CustomAttributes)
        public virtual System.DateTime Date
        {
            get
            {
                // *** Start programmer edit section *** (Meeting.Date Get start)

                // *** End programmer edit section *** (Meeting.Date Get start)
                System.DateTime result = this.fDate;
                // *** Start programmer edit section *** (Meeting.Date Get end)

                // *** End programmer edit section *** (Meeting.Date Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meeting.Date Set start)

                // *** End programmer edit section *** (Meeting.Date Set start)
                this.fDate = value;
                // *** Start programmer edit section *** (Meeting.Date Set end)

                // *** End programmer edit section *** (Meeting.Date Set end)
            }
        }
        
        /// <summary>
        /// Meeting.
        /// </summary>
        // *** Start programmer edit section *** (Meeting.Presentation CustomAttributes)

        // *** End programmer edit section *** (Meeting.Presentation CustomAttributes)
        public virtual IIS.BookClub_2_1.DetailArrayOfPresentation Presentation
        {
            get
            {
                // *** Start programmer edit section *** (Meeting.Presentation Get start)

                // *** End programmer edit section *** (Meeting.Presentation Get start)
                if ((this.fPresentation == null))
                {
                    this.fPresentation = new IIS.BookClub_2_1.DetailArrayOfPresentation(this);
                }
                IIS.BookClub_2_1.DetailArrayOfPresentation result = this.fPresentation;
                // *** Start programmer edit section *** (Meeting.Presentation Get end)

                // *** End programmer edit section *** (Meeting.Presentation Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meeting.Presentation Set start)

                // *** End programmer edit section *** (Meeting.Presentation Set start)
                this.fPresentation = value;
                // *** Start programmer edit section *** (Meeting.Presentation Set end)

                // *** End programmer edit section *** (Meeting.Presentation Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "MeetingE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MeetingE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MeetingE", typeof(IIS.BookClub_2_1.Meeting));
                }
            }
            
            /// <summary>
            /// "MeetingL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MeetingL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MeetingL", typeof(IIS.BookClub_2_1.Meeting));
                }
            }
        }
    }
}