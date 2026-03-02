const Package = require("../models/Package");
const PackageBooking = require("../models/PackageBooking");
const Passenger = require("../models/Passenger");

const packageBooking = async (req, res) => {
  try {
    const { package_id, travellers, passengers } = req.body;
    const customer_id = req.user.id;

    //find pkg
    const pkg = await Package.findById(package_id);

    if (!pkg) {
      return res.status(404).json({ message: "package not found" });
    }

    //total amount
    let totalamount = 0;
    for (const person of passengers) {
      if (person.age < 12) {
        totalamount += pkg.price / 2;
      } else {
        totalamount += pkg.price;
      }
    }

    //booking
    const booking = new PackageBooking({
      Package_id: package_id,
      Custmer_id: customer_id,
      travellers,
      price_per_person: pkg.price,
      total_amount: totalamount,
      booking_status: "Pending",
    });
    const savedBooking = await booking.save();

    //save passenger
    const passengerlist = passengers.map((person) => ({
      p_booking_id: savedBooking._id,
      passenger_name: person.name,
      age: person.age,
      gender: person.gender,
    }));
    await Passenger.insertMany(passengerlist);

    res
      .status(201)
      .json({ message: "Booking successful", booking: savedBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const busticketBooking =async (req,res)=>{
  
    try{


    }catch{


    }
}

module.exports = { packageBooking };
