/**
 * Central Configuration for Mostafa & Rawan's Wedding Invitation
 * Strictly confirmed facts, authentic artwork, and natural Egyptian phrasing.
 * NO fake filler, NO unconfirmed details.
 */

export const WEDDING_DATE = "2026-10-17T19:00:00+02:00";

export const weddingConfig = {
  groom: "MOSTAFA",
  groomAr: "مصطفى",
  bride: "RAWAN",
  brideAr: "روان",

  // Strictly English event title as requested
  eventType: "THE WEDDING",

  // Iconic lyric from the couple's artwork
  romanticQuoteAr: "صالحت بيك أيامي.. سامحت بيك الزمن",
  romanticQuote: "With you, I made peace with my days, and forgave time itself.",

  // Authentic, natural Egyptian invitation copy
  invitationHeadlineAr: "فرحتنا متكملش إلا بوجودكم وسطينا",
  invitationSubtextAr: "مستنيين كل حبايبنا يشاركونا أحلى ليلة!",

  weddingDate: WEDDING_DATE,
  displayDate: "Saturday, October 17, 2026",
  displayDateAr: "السبت، ١٧ أكتوبر ٢٠٢٦",
  displayTime: "7:00 PM",
  displayTimeAr: "الساعة ٧:٠٠ مساءً",

  location: {
    venueName: "El Torath Ballroom",
    venueNameAr: "قاعة التراث",
    city: "Mansoura, Egypt",
    cityAr: "المنصورة",
    address: "Talkha - Mansoura Road, Dakahlia",
    addressAr: "طريق طلخا - المنصورة، محافظة الدقهلية",
    locationUrl: "https://maps.app.goo.gl/GDEuKqZ8shG3MxF69",
    latitude: 31.049811,
    longitude: 31.381761,
  },

  music: {
    src: "/audio/yom-ma-etabelna.mp3?v=master-cd-320k",
    title: "Amr Diab – Yom Ma Etabelna",
    titleAr: "عمرو دياب – يوم ما تقابلنا",
    artist: "Amr Diab",
  },

  coupleDetails: {
    artPhoto: "/images/mostafa-rawan-art.jpg",
  },

  // Strictly confirmed schedule
  timeline: [
    {
      num: "01",
      time: "7:00 PM",
      timeAr: "٧:٠٠ م",
      title: "Guest Reception",
      titleAr: "استقبال الحضور والضيافة",
    },
    {
      num: "02",
      time: "8:00 PM",
      timeAr: "٨:٠٠ م",
      title: "Katb Ketab",
      titleAr: "مراسم كتب الكتاب",
    },
    {
      num: "03",
      time: "8:30 PM",
      timeAr: "٨:٣٠ م",
      title: "The Zaffa",
      titleAr: "الزفة والترحيب بالعروسين",
    },
    {
      num: "04",
      time: "9:30 PM",
      timeAr: "٩:٣٠ م",
      title: "Dinner",
      titleAr: "العشاء",
    },
    {
      num: "05",
      time: "10:30 PM",
      timeAr: "١٠:٣٠ م",
      title: "First Dance & Cake",
      titleAr: "الرقصة الأولى وتقطيع التورتة",
    },
  ],

  dressCode: {
    title: "Formal Elegance",
    titleAr: "ملابس رسمية",
    descriptionAr: "بدل كاملة للسادة، وفساتين سواريه راقية للسيدات",
  },
};
