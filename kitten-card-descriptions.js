const PAWS_KITTEN_CARD_DESCRIPTIONS = {
  raymond: "Affectionate and playful, he loves people, pets, loud purrs, and spending time together.",
  wally: "Timid at first, he loves pets, playful time, purring, and staying near his people.",
  diego: "Outgoing and playful, he carries toys around and loves being part of everything.",
  valentina: "Confident and playful, she explores fearlessly, seeks attention, chats, and enjoys harness walks.",
  claudia: "Timid at first, she loves chasing toys, wrestling with siblings, and cuddling once comfortable.",
  paloma: "Gentle and a little shy at first, she warms up quickly and loves cuddles.",
  harvey: "Affectionate and people-loving, he loves being held, playing with toys, and making biscuits nearby.",
  melody: "Confident and affectionate, she loves being held, following her people, and joining every game."
};

if (typeof globalThis !== "undefined") {
  globalThis.PAWS_KITTEN_CARD_DESCRIPTIONS = PAWS_KITTEN_CARD_DESCRIPTIONS;
}

if (typeof module !== "undefined") {
  module.exports = PAWS_KITTEN_CARD_DESCRIPTIONS;
}
