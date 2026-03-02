const Bus = require("../models/Bus");
const BusRoute = require("../models/BusRoute");
const BusTicketBooking = require("../models/BusTicketBooking");

// 1. Get All Buses
const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching buses", error });
  }
};

// 2. Add New Bus
const addBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json({ message: "Bus added successfully", bus: newBus });
  } catch (error) {
    res.status(500).json({ message: "Error adding bus", error });
  }
};

// 3. Update Bus
const updateBus = async (req, res) => {
  try {
    const updateBus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Bus updated", bus: updateBus });
  } catch (error) {
    res.status(500).json({ message: "Error updating bus", error });
  }
};

// 4. Delete Bus
const deleteBus = async (req, res) => {
  try {
    await Bus.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bus deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bus", error });
  }
};

// --- BUS ROUTES LOGIC ---

module.exports = {
  getBuses,
  addBus,
  updateBus,
  deleteBus,
};