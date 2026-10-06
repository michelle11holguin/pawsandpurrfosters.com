// ==========================================
// KITTEN CARDS AND PROFILE DETAILS — EDIT HERE
// Add one object per kitten. Use empty strings or [] for details not ready yet.
// Photos should live in assets/kittens/.
// ==========================================
const appRoot = typeof window !== "undefined" ? window : globalThis;

appRoot.PAWS_KITTEN_STATUSES = {
  AVAILABLE: "Available",
  RETURNED_AVAILABLE: "Returned — Available",
  PENDING_INTEREST: "Pending Interest",
  ALMOST_AVAILABLE: "Almost Available",
  PRE_ADOPTED: "Pre-Adopted",
  COMING_SOON: "Coming Soon",
  ADOPTED: "Adopted"
};

appRoot.PAWS_AVAILABLE_KITTEN_STATUSES = new Set([
  appRoot.PAWS_KITTEN_STATUSES.AVAILABLE,
  appRoot.PAWS_KITTEN_STATUSES.RETURNED_AVAILABLE,
  appRoot.PAWS_KITTEN_STATUSES.PENDING_INTEREST
]);

appRoot.PAWS_KITTENS = [
  {
    id: "diego",
    name: "Diego",
    status: "Available",
    adoptionStatus: "Available",
    description: "Diego is a super outgoing and playful kitten who loves being involved in every activity.",
    image: "assets/kittens/diego-main.png",
    profileUrl: "kittens/profile-template.html?id=diego",
    gender: "Male",
    birthday: "2026-03-24",
    litterNumber: 11,
    bio: "Meet Diego! He is a super outgoing and playful kitten who spends most of his time running, jumping, wrestling, and climbing with his siblings. Diego loves carrying toys in his mouth and showing them off to anyone. He is social, enjoys being around people, and always wants to be a part of whatever is going on. He loves attention and often puts himself right in the middle of everything just to be involved.",
    photos: [
      "https://i.ibb.co/8V9NJcL/Take-Me-Cards-16.jpg",
      "https://i.ibb.co/DgvhpLyR/Kitten-Paw-Prints-42.jpg",
      "https://i.ibb.co/BxbTYhp/D3417-D3-E-F4-F7-4-D3-D-BA4-C-997557510299.jpg",
      "https://i.ibb.co/ccSzNsLD/5534058-C-D87-A-450-E-AAC5-70-C89-DC2-AD81.png"
    ],
    personalityTraits: ["Outgoing", "Playful", "Social", "Active", "Attention-loving", "Loves other cats"],
    idealHome: "A home where he can be part of the action, with people around to play, explore, and cuddle.",
    compatibility: { dogs: "No", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Neutered", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "https://www.petfinder.com/cat/diego-050b5d9b-599c-4483-98fc-b2957135ac14/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "valentina" }
  },
  {
    id: "valentina",
    name: "Valentina",
    status: "Available",
    adoptionStatus: "Available",
    description: "A confident and affectionate kitten who loves attention and keeps the room full of energy.",
    image: "https://i.ibb.co/JjBHwsmH/CF5999-A0-A5-C7-4-ED1-9585-6-AA4795764-A8.png",
    profileUrl: "kittens/profile-template.html?id=valentina",
    gender: "Female",
    birthday: "2026-03-24",
    litterNumber: 11,
    bio: "Meet Valentina! She's a confident and playful kitten who loves exploring and being curious about everything around her. Valentina is not afraid of much and will often walk right up to people asking for attention. She enjoys being around people and is very social, often purring almost instantly when being pet. She's affectionate and playful and truly the best of both worlds. Valentina is also a chatterbox and loves talking to people. She's very vocal and always has something to say. She also absolutely loves walking on a harness and is amazing with it.",
    photos: [
      "https://i.ibb.co/ZzP2svry/IMG-2234.jpg",
      "https://i.ibb.co/6cfLNPNG/Take-Me-Cards-17.jpg",
      "https://i.ibb.co/rKTZ99qW/Kitten-Paw-Prints-43.jpg",
      "https://i.ibb.co/HL2YrjMQ/57-B3-E63-C-2-C83-4533-8519-5-E4-AC1-F462-B2.jpg",
      "https://i.ibb.co/QjfhQZ7B/C98-C2165-A5-E8-49-B8-BC3-A-18-E31-E074194.png"
    ],
    personalityTraits: ["Confident", "Playful", "Curious", "Social", "Affectionate", "Vocal"],
    idealHome: "A home with a warm, attentive family who appreciates a sweet, social companion.",
    compatibility: { dogs: "Unknown — no direct experience", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Spayed", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "https://www.petfinder.com/cat/valentina-5a9bf649-de45-4bcf-b4d1-e47000b82ce7/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "diego" }
  },
  {
    id: "claudia",
    name: "Claudia",
    status: "Available",
    adoptionStatus: "Available",
    description: "A sweet kitten with a calm personality who enjoys quiet attention and gentle play.",
    image: "assets/kittens/claudia-main.png",
    profileUrl: "kittens/profile-template.html?id=claudia",
    gender: "Female",
    birthday: "2026-03-24",
    litterNumber: 11,
    bio: "Meet Claudia! She is on the more timid side when first exploring new spaces, but that does not stop her from being a playful and energetic kitten. She loves playing and wrestling with her siblings and never sits out on the fun, always chasing toys and anything that moves. Once she is comfortable, she is very affectionate, enjoys pets, and will often purr loudly. At the end of the day, she often chooses to sleep right next to you.",
    photos: [
      "assets/kittens/claudia-photo-2.png",
      "assets/kittens/claudia-photo-3.png",
      "assets/kittens/claudia-photo-4.png",
      "assets/kittens/claudia-photo-5.png"
    ],
    personalityTraits: ["Timid at first", "Playful", "Energetic", "Affectionate", "Sweet", "Loving"],
    idealHome: "High-energy or low-energy",
    idealHomeNote: "Claudia enjoys being held once she knows you and feels comfortable.",
    compatibility: { cats: "Yes — with proper introduction", dogs: "Unknown — no direct experience", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Spayed", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "https://www.petfinder.com/cat/claudia-ab77cbff-645f-41c9-9920-514a578d8796/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "paloma" },
    pairingDescription: "Claudia and Paloma are biological sisters who are incredibly bonded and are always together. They love playing, chasing each other, and curling up together for naps. You will often find one right behind the other, and their close bond makes them a very sweet pair to watch grow together."
  },
  {
    id: "paloma",
    name: "Paloma",
    status: "Available",
    adoptionStatus: "Available",
    description: "A curious and friendly kitten who loves exploring and then settling in for cuddles.",
    image: "assets/kittens/paloma-main.png",
    profileUrl: "kittens/profile-template.html?id=paloma",
    gender: "Female",
    birthday: "2026-03-24",
    litterNumber: 11,
    bio: "Meet Paloma! She is a sweet and gentle kitten who may be shy when meeting new people, but she warms up quickly. Once comfortable, she is affectionate and loves curling up beside you for attention. She is calmer than her siblings and enjoys relaxing with her favorite people. She also loves kneading soft blankets, giving morning kisses, and cuddling with you at night.",
    photos: [
      "assets/kittens/paloma-photo-2.png",
      "assets/kittens/paloma-photo-3.png",
      "assets/kittens/paloma-photo-4.png",
      "assets/kittens/paloma-photo-5.png"
    ],
    personalityTraits: ["Sweet", "Gentle", "Shy at first", "Calm", "Affectionate", "Cuddly"],
    idealHome: "Paloma would do best in a home that is willing to give her time and patience to adjust. She may be shy when first meeting someone or entering a new environment, but once she feels comfortable, her sweet and affectionate personality will show.",
    compatibility: { dogs: "Unknown — no direct experience", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Spayed", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "https://www.petfinder.com/cat/paloma-4a4706d0-5d49-4ff9-bd0a-c969e5d121c0/ca/oakley/no-paws-left-behind-kitty-rescue-ca3018/details/",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "claudia" },
    pairingDescription: "Claudia and Paloma are biological sisters with a special bond and are rarely far apart. They follow each other everywhere, love chasing and playing together, and curl up side by side for naps. They are a very sweet duo who should get to keep growing up together.",
    adoptionNotice: {
      title: "Adoption Event Notice",
      message: "From September 30 through November 5, Claudia cannot attend adoption events during the rescue's black-cat safety period. Because Paloma must be adopted with Claudia, Paloma will not attend events during this period either. Adoption inquiries for the pair may resume after November 5."
    }
  },
  {
    id: "harvey",
    name: "Harvey",
    status: "Available",
    adoptionStatus: "Available",
    description: "A playful and people-focused kitten who is always ready to follow the action.",
    image: "assets/kittens/harvey-main.png",
    profileUrl: "kittens/profile-template.html?id=harvey",
    gender: "Male",
    birthday: "",
    litterNumber: 12,
    bio: "Harvey is playful, bold, and social. He likes being in the middle of the fun and following his people wherever they go.",
    photos: [],
    personalityTraits: ["Playful", "Bold", "Social", "Outgoing", "Curious", "Active"],
    idealHome: "A home with regular interaction, toys, and room for a lively kitten to explore and play.",
    compatibility: { dogs: "Unknown — no direct experience", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Neutered", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "melody" }
  },
  {
    id: "melody",
    name: "Melody",
    status: "Available",
    adoptionStatus: "Available",
    description: "A bright, lively kitten with a sweet nature and an affectionate personality.",
    image: "assets/kittens/melody-main.png",
    profileUrl: "kittens/profile-template.html?id=melody",
    gender: "Female",
    birthday: "",
    litterNumber: 12,
    bio: "Melody is lively, affectionate, and playful. She brings energy and sweetness to every room she enters.",
    photos: [],
    personalityTraits: ["Lively", "Affectionate", "Playful", "Friendly", "Sweet", "Energetic"],
    idealHome: "A cheerful home with time for play, attention, and a kitten who loves to be part of everyday life.",
    compatibility: { dogs: "Unknown — no direct experience", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Spayed", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "harvey" }
  },
  {
    id: "wally",
    name: "Wally",
    status: "Returned — Available",
    adoptionStatus: "Returned — Available",
    description: "A curious kitten who enjoys exploring, playing, and making himself part of the family.",
    image: "assets/kittens/wally-main.png",
    profileUrl: "kittens/profile-template.html?id=wally",
    gender: "Male",
    birthday: "",
    litterNumber: 10,
    bio: "Wally is curious, funny, and outgoing. He loves exploring new spaces and then settling in with the people he adores.",
    photos: [],
    personalityTraits: ["Curious", "Funny", "Outgoing", "Social", "Active", "Playful"],
    idealHome: "A playful home where his curiosity and personality are welcomed every day.",
    compatibility: { dogs: "Unknown — no direct experience", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Neutered", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "raymond" }
  },
  {
    id: "raymond",
    name: "Raymond",
    status: "Returned — Available",
    adoptionStatus: "Returned — Available",
    description: "A gentle, social kitten who loves people and turns every room into a new adventure.",
    image: "assets/kittens/raymond-main.png",
    profileUrl: "kittens/profile-template.html?id=raymond",
    gender: "Male",
    birthday: "",
    litterNumber: 10,
    bio: "Raymond is gentle, social, and playful. He enjoys being near people, especially when there is fun to be had.",
    photos: [],
    personalityTraits: ["Gentle", "Social", "Playful", "Affectionate", "Curious", "Sweet"],
    idealHome: "A calm home where he can be close to people and enjoy gentle play, cuddles, and companionship.",
    compatibility: { dogs: "Unknown — no direct experience", cats: "Yes — with proper introduction", youngerChildren: "Possibly — no direct experience", olderChildren: "Yes" },
    healthChecklist: ["Neutered", "Fully vaccinated", "Dewormed", "Flea treated", "Microchipped", "Fostered and socialized"],
    adoptionRequirements: [],
    petfinderUrl: "",
    whereToMeet: "",
    videoUrl: "",
    eventInformation: "",
    pairing: { type: "must", kittenId: "wally" }
  }
];

if (typeof module !== "undefined") {
  module.exports = {
    PAWS_KITTEN_STATUSES: appRoot.PAWS_KITTEN_STATUSES,
    PAWS_AVAILABLE_KITTEN_STATUSES: appRoot.PAWS_AVAILABLE_KITTEN_STATUSES,
    PAWS_KITTENS: appRoot.PAWS_KITTENS
  };
}
