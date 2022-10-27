const { findOne } = require("./model");
const DeskBook = require("./model");

// create new desk
exports.createDesk = async (req, res) => {
  try {
    const deskObj = {
      deskname: req.body.deskname,
      bookings: [
        {
          date: req.body.bookings[0].date,
          bookingID: req.body.bookings[0].bookingID,
        },
      ],
    };
    const newDesk = await DeskBook.create(deskObj);
    res.send({ message: "Your desk is booked. Your reference is:", newDesk });
  } catch (error) {
    console.log(`create desk error ${error}`);
    res.send(error);
  }
};

// add booking to desk
exports.updateDesk = async (req, res) => {
  // check to see if booking ID already exists
  //   if (await DeskBook.exists({ bookingID: req.body.bookings.bookingID })) {
  //     console.log("This booking already exists");
  //     res.send({ message: "no booking" });
  //   } else {
  //     console.log("This booking will be created");
  //     res.send({ message: "created booking" });
  //   }

  try {
    const bookingID = req.body.bookings.bookingID;
    const existingBook = await DeskBook.find({
      deskname: req.body.deskname,
    });

    //this is an array of existing bookings on a desk
    console.log(existingBook[0].bookings);

    //find if bookingid exists in above array array.find method?
    //if bookingid exists return error, else continue with normal flow
    const deskName = req.body.deskname;

    //add booking to array
    const newBook = await DeskBook.updateOne(
      { deskname: deskName },
      {
        $push: {
          bookings: {
            userID: req.body.bookings.userID,
            date: req.body.bookings.date,
            bookingID: req.body.bookings.bookingID,
          },
        },
      }
    );
    res.send({ message: `booking made` });
  } catch (error) {
    console.log(`updateDesk error: ${error}`);
    res.send({ message: "booking error" });
  }
};
