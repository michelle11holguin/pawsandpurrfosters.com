// FOSTER ALUMNI — EDIT HERE
// Add kittens only after adoption is confirmed and the adoption date is recorded.
// Use YYYY-MM-DD dates and image paths from assets/kittens/ when available.
// Set companionId to the other alumnus's id when kittens were adopted together.
const alumniRoot = typeof window !== "undefined" ? window : globalThis;

alumniRoot.PAWS_FOSTER_ALUMNI = [
  {
    id: "oscar",
    status: "Adopted",
    name: "Oscar",
    gender: "Male",
    birthday: "2024-04-04",
    adoptionDate: "2024-08-10",
    fosterLitter: 2,
    image: "assets/kittens/alumni-oscar.png",
    photos: []
  },
  {
    id: "roscoe",
    status: "Adopted",
    name: "Roscoe",
    gender: "Male",
    birthday: "2024-04-04",
    adoptionDate: "2024-08-03",
    fosterLitter: 2,
    image: "assets/kittens/alumni-roscoe.png",
    photos: [],
    fosterFail: true
  },
  {
    id: "bea",
    status: "Adopted",
    name: "Bea",
    gender: "Female",
    birthday: "2024-04-04",
    adoptionDate: "2024-08-10",
    fosterLitter: 2,
    image: "assets/kittens/alumni-bea.png",
    photos: []
  },
  {
    id: "rosie",
    status: "Adopted",
    name: "Rosie",
    gender: "Female",
    birthday: "2024-01-12",
    adoptionDate: "2024-06-23",
    fosterLitter: 1,
    image: "assets/kittens/alumni-rosie.png",
    photos: [],
    companionId: "lily"
  },
  {
    id: "lily",
    status: "Adopted",
    name: "Lily",
    gender: "Female",
    birthday: "2024-01-12",
    adoptionDate: "2024-06-23",
    fosterLitter: 1,
    image: "assets/kittens/alumni-lily.png",
    photos: [],
    companionId: "rosie"
  },
  {
    id: "mouse",
    status: "Adopted",
    name: "Mouse",
    gender: "Male",
    birthday: "2024-01-12",
    adoptionDate: "2025-04-11",
    fosterLitter: 1,
    image: "assets/kittens/alumni-mouse.png",
    photos: []
  },
  {
    id: "smudge",
    status: "Adopted",
    name: "Smudge",
    gender: "Male",
    birthday: "2024-01-12",
    adoptionDate: "2024-04-23",
    fosterLitter: 1,
    image: "assets/kittens/alumni-smudge.png",
    photos: [],
    fosterFail: true
  }
];
