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
    title: "October Adoption Notice",
    messages: [
      "During the month of October, the rescue we foster with is temporarily pausing adoptions of black kittens from September 30 through November 5 to help protect them from potential harm during this time.",
      "As a result, Claudia will not be attending adoption events until after the first week of November. Paloma, her bonded pair, will also likely miss most adoption events during these weeks, though she may attend select events when appropriate.",
      "Thank you for understanding as we prioritize the safety and well-being of our foster kittens."
    ]
  }
};
