const { Router } = require("express");
const userRouter = Router();
const { createUser, findUser, findAllUsers } = require("./controllers");

userRouter.post("/user", createUser);
userRouter.get("/user", findAllUsers);

module.exports = userRouter;
