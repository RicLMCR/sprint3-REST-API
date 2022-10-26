const { Router } = require("express");
const deskRouter = Router();
const { createDesk, updateDesk } = require("./controllers");


deskRouter.post("/desk", createDesk);
deskRouter.put("/desk", updateDesk);
// createDesk
// findBooking
// createBooking

module.exports = deskRouter;
