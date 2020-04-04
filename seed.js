const db = require("./server/db");
const Sequelize = require("sequelize");
const User = require("./server/models/user");

const seedUsers = [
  { username: "Brendan", bankroll: 10000, password: "brendan" },
  { username: "Nadnerd", bankroll: 10000, password: "nadberd" },
  { username: "Kerry", bankroll: 10000, password: "kerry" },
  { username: "Yrrek", bankroll: 10000, password: "yrrek" }
];

async function seed() {
  try {
    await db.sync({ force: true });
    await User.bulkCreate(seedUsers);
  } catch (error) {
    console.log(error);
  }
}

seed();

module.exports = seed;
