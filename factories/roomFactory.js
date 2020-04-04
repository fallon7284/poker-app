const generateTable = require("../utilities/generateTable");

module.exports = (user = null, size = 10) => {
  const table = generateTable(size);
  table.players[0] = user;
  return {
    users: [user],
    messages: [],
    seats: table
  };
};
