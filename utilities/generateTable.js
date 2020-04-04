module.exports = size => {
  let buttonPosition = 0;
  const players = new Array(size).fill(null);
  return {
    players,
    dealer: players[buttonPosition],
    moveButton: size => {
      if (buttonPosition >= size) {
        buttonPosition -= size;
      }
      buttonPosition++;
    }
  };
};
