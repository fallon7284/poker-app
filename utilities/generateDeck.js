const deck = {
  S2: require("./cardImages/2_of_spades.svg"),
  S3: require("./cardImages/3_of_spades.svg"),
  S4: require("./cardImages/4_of_spades.svg"),
  S5: require("./cardImages/5_of_spades.svg"),
  S6: require("./cardImages/6_of_spades.svg"),
  S7: require("./cardImages/7_of_spades.svg"),
  S8: require("./cardImages/8_of_spades.svg"),
  S9: require("./cardImages/9_of_spades.svg"),
  S10: require("./cardImages/10_of_spades.svg"),
  S11: require("./cardImages/jack_of_spades.svg"),
  S12: require("./cardImages/queen_of_spades.svg"),
  S13: require("./cardImages/king_of_spades.svg"),
  S14: require("./cardImages/ace_of_spades.svg"),
  C2: require("./cardImages/2_of_clubs.svg"),
  C3: require("./cardImages/3_of_clubs.svg"),
  C4: require("./cardImages/4_of_clubs.svg"),
  C5: require("./cardImages/5_of_clubs.svg"),
  C6: require("./cardImages/6_of_clubs.svg"),
  C7: require("./cardImages/7_of_clubs.svg"),
  C8: require("./cardImages/8_of_clubs.svg"),
  C9: require("./cardImages/9_of_clubs.svg"),
  C10: require("./cardImages/10_of_clubs.svg"),
  C11: require("./cardImages/jack_of_clubs.svg"),
  C12: require("./cardImages/queen_of_clubs.svg"),
  C13: require("./cardImages/king_of_clubs.svg"),
  C14: require("./cardImages/ace_of_clubs.svg"),
  H2: require("./cardImages/2_of_hearts.svg"),
  H3: require("./cardImages/3_of_hearts.svg"),
  H4: require("./cardImages/4_of_hearts.svg"),
  H5: require("./cardImages/5_of_hearts.svg"),
  H6: require("./cardImages/6_of_hearts.svg"),
  H7: require("./cardImages/7_of_hearts.svg"),
  H8: require("./cardImages/8_of_hearts.svg"),
  H9: require("./cardImages/9_of_hearts.svg"),
  H10: require("./cardImages/10_of_hearts.svg"),
  H11: require("./cardImages/jack_of_hearts.svg"),
  H12: require("./cardImages/queen_of_hearts.svg"),
  H13: require("./cardImages/king_of_hearts.svg"),
  H14: require("./cardImages/ace_of_hearts.svg"),
  D2: require("./cardImages/2_of_diamonds.svg"),
  D3: require("./cardImages/3_of_diamonds.svg"),
  D4: require("./cardImages/4_of_diamonds.svg"),
  D5: require("./cardImages/5_of_diamonds.svg"),
  D6: require("./cardImages/6_of_diamonds.svg"),
  D7: require("./cardImages/7_of_diamonds.svg"),
  D8: require("./cardImages/8_of_diamonds.svg"),
  D9: require("./cardImages/9_of_diamonds.svg"),
  D10: require("./cardImages/10_of_diamonds.svg"),
  D11: require("./cardImages/jack_of_diamonds.svg"),
  D12: require("./cardImages/queen_of_diamonds.svg"),
  D13: require("./cardImages/king_of_diamonds.svg"),
  D14: require("./cardImages/ace_of_diamonds.svg")
};

module.exports = () => {
  const numberOfShuffles = Math.random() * 5 + 5;
  let firstDeck = Object.entries(deck);
  const shuffle = arr => {
    const halves = arr.reduce(
      (accum, val, i) => {
        if (i % 2 === 0 && i % 7 !== 0) {
          accum[0].push(val);
        } else {
          accum[1].push(val);
        }
        return accum;
      },
      [[], []]
    );
    return halves[0].concat(halves[1]);
  };
  for (let i = 0; i < numberOfShuffles; i++) {
    firstDeck = shuffle(firstDeck);
  }
  return firstDeck;
};
