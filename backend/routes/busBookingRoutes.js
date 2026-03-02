const express = require("express");
const { authMiddleware, isadmin } = require("../middleware/authmiddleware");
const router = express.Router();
const {
  bookBusTicket,
  getAllBookings,
  updateBookingStatus,
  getBookedSeats,
} = require("../controllers/busBookingController");

// 1. Book a Bus Ticket (Customer Only)
router.post("/book", authMiddleware, bookBusTicket);

// 2. Get All Bookings (Admin Only)
router.get("/all", authMiddleware, isadmin, getAllBookings);

// 3. Approve/Reject Booking (Admin Only)
router.put("/status/:id", authMiddleware, isadmin, updateBookingStatus);

// 4. Get Booked Seats (Public, for map)
router.get("/seats", getBookedSeats); // e.g. /api/bus-bookings/seats?route_id=...&travel_date=...

module.exports = router;
