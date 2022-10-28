const User = require("./model");

// create user profile (ADMIN ONLY)
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

//locate user via username (NOT ACTIVE)
exports.findUser = async (req, res) => {
  try {
    const users = await User.find({ username: req.body.username });
    res.send(users);
  } catch (error) {
    console.log(`findUser error: ${error}`);
    res.send("User does not exist");
  }
};

//find and return all users
exports.findAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send(allUsers);
    console.log(`all users are: ${allUsers}`);
  } catch (error) {
    console.log(`find all users error: ${error}`);
  }
};
