// ==================================================
// EASY EVENT EDITING
// Change the information below when our schedule changes.
// ==================================================
window.PAWS_EVENT_DATA = {
  featuredEvent: {
    active: false,
    title: "Adoption Event",
    location: "PetSmart — Pittsburg",
    date: "Saturday, October 3, 2026",
    time: "11:00 AM–3:00 PM",
    address: "4655 Century Blvd, Pittsburg, CA 94565",
    mapsUrl: "",
    attendingKittens: [],
    description: "Meet our adoptable kittens in person at PetSmart in Pittsburg.",
    specialNotice: ""
  },
  regularSchedule: {
    active: true,
    note: "The regular schedule can change, and special events may occur.",
    locations: [
      {
        name: "Pittsburg PetSmart",
        timing: "1st and 3rd weekend of the month"
      },
      {
        name: "Antioch PetSmart",
        timing: "2nd weekend of the month",
        days: "Saturday and Sunday"
      }
    ]
  },
  specialEvent: {
    active: false,
    title: "Special adoption event",
    description: "Add special-event details here when an additional event is scheduled.",
    location: "",
    date: "",
    time: "",
    address: "",
    mapsUrl: ""
  },
  octoberNotice: {
    active: true,
    title: "October adoption and attendance notice",
    messages: [
      "During the month of October, black cats will not be available for adoption due to safety risks associated with the month, in accordance with rescue policy.",
      "Claudia will not be attending adoption events during October. Because Paloma is bonded with Claudia, Paloma will not be attending events during October either."
    ]
  }
};
