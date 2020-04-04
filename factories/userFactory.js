module.exports = class User {
  constructor(
    id = null,
    username = null,
    bankroll = 0,
    sittingIn = false,
    rooms = {},
    seatReady = []
  ) {
    (this.id = id),
      (this.username = username),
      (this.bankroll = bankroll),
      (this.sittingIn = sittingIn),
      (this.rooms = rooms),
      (this.seatReady = seatReady);
    this.takeSeat = table => {
      for (let i = 0; i < table.length; i++) {
        if (table[i] === null) {
          table[i] = this;
          this.sittingIn = true;
          break;
        }
      }
      return false;
    };
    this.leaveSeat = (table, id) => {
      table.forEach((player, idx) => {
        if (player.id === id) {
          table[idx] = null;
          player.sittingIn = false;
        }
      });
    };
  }
};
