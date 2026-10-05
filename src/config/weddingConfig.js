/**
 * Central Configuration for Mostafa & Rawan's Wedding Invitation
 * All-English Luxury Haute-Couture Edition.
 */

export const WEDDING_DATE = "2026-10-17T20:00:00+02:00";

export const weddingConfig = {
  groom: "MOSTAFA",
  bride: "RAWAN",

  eventType: "THE WEDDING",

  // Warm & elegant English invitation copy
  invitationText: "Together with their families, Mostafa & Rawan invite you to celebrate their wedding and share in the joy of their new beginning.",

  weddingDate: WEDDING_DATE,
  displayDate: "Saturday, October 17, 2026",
  displayTime: "8:00 PM",

  location: {
    venueName: "El Torath Ballroom",
    city: "Mansoura, Egypt",
    address: "Talkha - Mansoura Road, Dakahlia",
    locationUrl: "https://maps.app.goo.gl/GDEuKqZ8shG3MxF69",
    latitude: 31.049811,
    longitude: 31.381761,
  },

  music: {
    src: "/audio/yom-ma-etabelna.mp3",
    title: "Amr Diab – Yom Ma Etabelna",
    artist: "Amr Diab",
  },

  coupleDetails: {
    artPhoto: "/images/mostafa-rawan-art.jpg?v=artwork-v3",
  },

  dressCode: {
    title: "Formal Elegance",
    subtitle: "Black Tie Optional",
    description: "Tailored formal suits for gentlemen and elegant evening dresses for ladies.",
  },

  celebration: {
    time: "8:00 PM",
    doorsOpen: "8:00 PM Sharp",
    venue: "El Torath Ballroom",
    city: "Mansoura, Egypt",
    quote: "Two souls, one heart, a lifetime of love to share.",
    note: "Your presence and blessings are the most precious gift to us as we begin our life together.",
  },
};
