const User = require("./models/user");

const loginUser = async ({ password, username }) => {
  try {
    const user = await User.findOne({
      where: {
        username,
        password
      }
    });
    return user || null;
  } catch (err) {
    console.log(err);
  }
  return user;
};

createUser = async ({ password, username }) => {
  try {
    const user = await User.findOne({
      where: {
        username
      }
    });
    if (!user) {
      const user = await User.create({
        password,
        username
      });
      return user;
    } else {
      return null;
    }
    console.log(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  loginUser,
  createUser
};
