const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    bus_number: { type: String, required: true },
    bus_name: { type: String, required: true },
    bus_type: { type: String, required: true },
    total_seats: { type: Number, required: true },
    driver_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      required: true,
    },
    status: { type: String, default: "Active" },
  },
  { timestamps: true }
);
      
module.exports = mongoose.model("Bus", busSchema);
