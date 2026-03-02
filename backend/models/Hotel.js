const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    hotel_type: {
      type: String,
    },
    description: { type: String },
     status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hotel", hotelSchema);
