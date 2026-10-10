// ==================================================
// EASY EVENT EDITING
// Change the information below when our schedule changes.
// ==================================================
window.PAWS_EVENT_DATA = {
  featuredEvent: {
    active: true,
    title: "Where to Find Us",
    location: "Antioch PetSmart",
    date: "Saturday, October 10, 2026",
    time: "11 a.m.–3 p.m.",
    address: "5879 Lone Tree Way, Antioch, CA 94531",
    mapsUrl: "",
    attendingKittens: ["Diego", "Valentina", "Harvey", "Melody", "Raymond", "Wally"],
    description: "",
    specialNotice: ""
  },
  regularSchedule: {
    active: true,
    note: "Schedule is subject to change. Special adoption events and additional locations may be added.",
    locations: [
      {
        name: "Pittsburg PetSmart",
        timing: "1st & 3rd Saturday of each month",
        address: "4655 Century Blvd, Pittsburg, CA 94565"
      },
      {
        name: "Antioch PetSmart",
        timing: "2nd Saturday & Sunday of each month",
        address: "5879 Lone Tree Way, Antioch, CA 94531"
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
    title: "October Adoption Event Attendance",
    messages: [
      "Paloma and Claudia will not be attending this event. Please check back after the first week of November for updates about their next adoption event."
    ]
  }
};
