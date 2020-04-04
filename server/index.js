const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const morgan = require("morgan");
const poker = require("./poker");
const bodyParser = require("body-parser");
const session = require("express-session");
const { red, blue, green, yellow } = require("chalk");

const PORT = 3000;
const app = express();

app.use(
  session({
    secret: "PurpleNurples",
    resave: false,
    saveUninitialized: true
  })
);

app.use((req, res, next) => {
  next();
});

// logging middleware
app.use(morgan("tiny"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", require("./api"));
// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "/static")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/static/index.html"));
});

const server = app.listen(PORT, () => {
  console.log(blue(`listening on port ${PORT}`));
});

const io = socketio(server);

// const namespacedIo = io.of(/.*/).on("connect", socket => {
//   console.log(socket);
// });

const namespace = io.of(/.*/).on("connect", socket => {
  const namespace = socket.nsp.name;
  const socketId = socket.id.slice(socket.nsp.name.length + 1);
  console.log(
    blue(
      `index.js -> CONNECTION -> namespace: ${namespace}, socketId: ${socketId}`
    )
  );
  socket.on("disconnect", reason => {
    console.log(
      red(
        `index.js -> DISCONNECTION -> namespace: ${namespace}, socketId: ${socketId}, reason: ${reason}`
      )
    );
  });
});

poker(namespace, io);
