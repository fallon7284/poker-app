const express = require("express");
const router = express();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.query.username
      }
    });
    if (user && user.password === req.query.password) {
      res.send(user);
    } else {
      res.status(401).send({ response: "incorrect credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res, next) => {
  const { password, username } = req.query;
  try {
    const user = await User.create({
      password,
      username
    });
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
