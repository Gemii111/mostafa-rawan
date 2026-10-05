/**
 * Central Configuration for Mostafa & Rawan's Wedding Invitation
 * Everyday friendly Egyptian tone & authentic couple artwork.
 */

export const WEDDING_DATE = "2026-10-17T19:00:00+02:00";

export const weddingConfig = {
  groom: "MOSTAFA",
  groomAr: "مصطفى",
  bride: "RAWAN",
  brideAr: "روان",

  eventType: "THE WEDDING",
  eventTypeAr: "فرحنا",
  eventSubtitle: "Our Story Begins Here",
  subtitleAr: "فرحتنا مش هتكمل غير بوجودكم معانا",

  // Iconic lyric from their artwork & Amr Diab song
  romanticQuoteAr: "صالحت بيك أيامي.. سامحت بيك الزمن",
  romanticQuote: "With you, I made peace with my days, and forgave time itself.",

  weddingDate: WEDDING_DATE,
  displayDate: "Saturday, October 17, 2026",
  displayDateAr: "السبت، ١٧ أكتوبر ٢٠٢٦",
  displayTime: "7:00 PM — Till Late",
  displayTimeAr: "من ٧:٠٠ مساءً لحد ما نخلص فرحة",

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

  timeline: [
    {
      num: "01",
      time: "7:00 PM",
      timeAr: "٧:٠٠ م",
      title: "Welcome & Gathering",
      titleAr: "وصول الحبايب ونبدأ السهرة",
      descAr: "عصائر ترحيبية وموسيقى رايقة مع وصول كل اللي بنحبهم وبنستناهم.",
    },
    {
      num: "02",
      time: "8:00 PM",
      timeAr: "٨:٠٠ م",
      title: "Katb El Ketab",
      titleAr: "كتب الكتاب ومحابس العمر",
      descAr: "لحظة كتب الكتاب وأحلى دعوات من القلب لبداية حياتنا سوا.",
    },
    {
      num: "03",
      time: "8:30 PM",
      timeAr: "٨:٣٠ م",
      title: "The Zaffa",
      titleAr: "الزفة المصرية والفرحة الكبيرة",
      descAr: "زفة بلدي مبهجة وكل الحبايب مسقطين وفرحانين من قلبهم.",
    },
    {
      num: "04",
      time: "9:30 PM",
      timeAr: "٩:٣٠ م",
      title: "Dinner Buffet",
      titleAr: "بوفيه العشا المفتوح",
      descAr: "عشا معمول مخصوص عشان تروقوا وتشحنوا طاقة لباقي السهرة.",
    },
    {
      num: "05",
      time: "10:30 PM",
      timeAr: "١٠:٣٠ م",
      title: "First Dance & Cake",
      titleAr: "الفيرست دانس وسهرة للصبح",
      descAr: "أول رقصة لينا سوا وتقطيع التورتة، وسهرة حلوة مش هتنتهي!",
    },
  ],

  story: [
    {
      chapter: "Part 1",
      chapterAr: "أول مرة",
      title: "How It Started",
      titleAr: "صدفة أحلى من ألف ميعاد",
      textAr: "كان يوم عادي جداً، بس النظرة والكلمتين غيروا كل حاجة.. حسينا إننا نعرف بعض من سنين وإن قلوبنا ارتاحت لبعض من أول ثانية.",
    },
    {
      chapter: "Part 2",
      chapterAr: "أيامنا وسهرنا",
      title: "Growing Closer",
      titleAr: "ضحكة من القلب وسوالف بليل",
      textAr: "مع كل خروجة وكوباية قهوة وضحكة من القلب، اتأكدنا إننا خلاص منقدرش نستغنى عن بعض، وإن بيتنا وأماننا هو وجودنا سوا.",
    },
    {
      chapter: "Part 3",
      chapterAr: "صالحت بيك أيامي",
      title: "The Promise",
      titleAr: "الوعد والأمان",
      textAr: "صالحت بيك أيامي وسامحت بيك الزمن.. الكلمة اللي اتقالت ووعدنا بيها بعض إننا نكمل المشوار سوا وعائلاتنا فرحوا بجمعتنا.",
    },
    {
      chapter: "Part 4",
      chapterAr: "فرحنا في التراث",
      title: "Our Big Day",
      titleAr: "يوم عمرنا اللي مستنيينه",
      textAr: "وصلنا لليوم اللي بنحلم بيه في قاعة التراث بالمنصورة، ومستنيينكم كلكم تنورونا وتفرحوا معانا من قلبكم!",
    },
  ],

  dressCode: {
    title: "Black Tie / Elegant",
    titleAr: "شياكة السهرة",
    descriptionAr: "شرفونا بأشيك إطلالة تليق بليلتنا (بدل كاملة للسادة، وفساتين سواريه راقية للسيدات).",
  },
};
