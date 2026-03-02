const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authmiddleware");

const {packageBooking} = require("../controllers/bookingController");
// Import your booking controller here

// POST /api/bookings/book
router.post("/book", authMiddleware, packageBooking);

module.exports = router;
