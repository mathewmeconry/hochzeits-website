/**
 * Central configuration for the wedding website.
 * Edit this file to update all content — no component files need to be touched.
 */
export const wedding = {
  partner1: "Kerstin",
  partner2: "Mathias",

  date: "12. Juni 2027",
  dateISO: "2027-06-12",

  venue: {
    name: "Seeblick Höhenhotel",
    address: "Hugenstrasse 24, 6376 Emmetten",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39405.3062586121!2d8.508931020486427!3d46.952317897238544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47855a1935eb3193%3A0x822ba8202ab9572c!2sSeeblick%20H%C3%B6henhotel!5e1!3m2!1sde!2sch!4v1779014135639!5m2!1sde!2sch",
  },

  // [PLACEHOLDER] Replace with the actual RSVP deadline
  rsvpDeadline: "1. März 2027", // [PLACEHOLDER]

  // [PLACEHOLDER] Replace with the actual RSVP form URL
  rsvpLink: "#", // [PLACEHOLDER]
  // [PLACEHOLDER] Replace with the actual shared photo album URL
  photosLink: "#", // [PLACEHOLDER]
} as const;
