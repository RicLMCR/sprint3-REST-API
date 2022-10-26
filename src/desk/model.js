const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userID: String,
  date: String,
  bookingID: String,
});

const deskSchema = new mongoose.Schema({
  deskname: String,
  bookings: [bookingSchema],
});

const DeskBook = mongoose.model("DeskBook", deskSchema);

module.exports = DeskBook;
