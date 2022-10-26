const User = require("./model");

// create user profile
exports.createUser = async (req, res) => {
  try {
    const userObj = {
      _id: req.body.id,
      username: req.body.username,
    };
    const newUser = await User.create(userObj);
    res.send();
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//locate user via username
exports.findUser = async (req, res) => {
  try {
    const users = await User.find({ username: req.body.username });
    res.send(users);
  } catch (error) {
    console.log(`findUser error: ${error}`);
    res.send("User does not exist");
  }
};
