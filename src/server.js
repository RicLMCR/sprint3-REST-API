require("./db/connection");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// add routes to controllers/endpoints
const userRouter = require("./user/routes");
const deskRouter = require("./desk/routes");

// enable conversion from/to json data
app.use(express.json());
app.use(userRouter);
app.use(deskRouter);

// confirm server is running
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
