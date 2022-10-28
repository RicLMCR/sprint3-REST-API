const { findOne } = require("./model");
const DeskBook = require("./model");

// create new desk (ADMIN ONLY)
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
  try {
    const existingBook = await DeskBook.find({
      deskname: req.body.deskname,
    });

    //this is an array of existing bookings on a desk
    console.log(existingBook[0].bookings);

    //find if date exists in above array .find method?
    const validationDate = req.body.bookings.date;
    console.log(`requested date is ${validationDate}`);
    const validate = existingBook[0].bookings.find(
      (all) => all.date == validationDate
    );

    //validation detrmines if booking can be made
    if (validate) {
      console.log("desk is booked already");
    } else {
      console.log("desk is free");
      // ******* //

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
    }
    res.send({ message: `booking made` }); //***** */
  } catch (error) {
    console.log(`updateDesk error: ${error}`);
    res.send({ message: "booking error" });
  }
};

// //find and return all desks
// exports.findAllDesks = async (req, res) => {
//   try {
//     const allDesks = await DeskBook.find({});
//     res.send(allDesks);
//     console.log(`all users are: ${allDesks}`);
//   } catch (error) {
//     console.log(`find all users error: ${error}`);
//   }
// };
