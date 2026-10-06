// ==================================================
// EASY EVENT EDITING
// Change the information below when our schedule changes.
// ==================================================
window.PAWS_EVENT_DATA = {
  featuredEvent: {
    active: false,
    title: "Where to Find Us",
    location: "",
    date: "",
    time: "",
    address: "",
    mapsUrl: "",
    attendingKittens: [],
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
    title: "October Adoption Attendance Notice",
    messages: [
      "During October, black cats will not be available for adoption at adoption events due to safety risks associated with the month, in accordance with the rescue's policy. We always want to prioritize the safety of our foster cats.",
      "Claudia will not be attending adoption events during October and the first week of November. Paloma, her bonded pair, will generally not attend events during this time either, although she may occasionally attend an event when we feel it is appropriate."
    ]
  }
};
