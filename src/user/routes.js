const { Router } = require("express");
const userRouter = Router();
const { createUser, findUser } = require("./controllers");

userRouter.post("/user", createUser);
userRouter.get("/user", findUser);

module.exports = userRouter;
