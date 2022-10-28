const { Router } = require("express");
const deskRouter = Router();
const { createDesk, updateDesk } = require("./controllers");

deskRouter.post("/desk", createDesk);
deskRouter.put("/desk", updateDesk);
// deskRouter.get("./desk", findAllDesks)
// createDesk
// findBooking
// createBooking

module.exports = deskRouter;
