const User = require("../factories/userFactory");
const roomFactory = require("../factories/roomFactory");
const { loginUser, createUser } = require("./functions");

module.exports = (nsp, io) => {
  const state = {
    brownCow: roomFactory(),
    redHen: roomFactory(),
    bluePig: roomFactory()
  };

  nsp.on("connect", socket => {
    const pokerRoom = socket.nsp.name.slice(1);
    const socketId = socket.id.slice(socket.nsp.name.length + 1);
    if (!state[pokerRoom]) {
      const user = new User(socketId);
      state[pokerRoom] = roomFactory(user, 10);
      user.sittingIn = true;
    } else {
      const user = new User(socketId);
      state[pokerRoom].users.push(user);
      user.takeSeat(state[pokerRoom].seats.players);
    }
    socket.emit("connected", state);
    socket.on("submit message", (id, str) => {
      state[id].messages.push(str);
      socket.emit("submitted message", state);
    });
    socket.on("user login", async user => {
      const response = await loginUser(user);
      socket.emit("logged in user", response);
    });
    socket.on("create user", async user => {
      const response = await createUser(user);
      if (response) socket.emit("created user", response);
      else socket.emit("username taken", user);
    });
    socket.on("disconnect", reason => {
      //   delete state[pokerRoom];
    });
  });
};
