const express = require("express");
const {authMiddleware,isadmin} = require('../middleware/authmiddleware');
const router = express.Router();
const {
  getBuses,
  addBus,
  updateBus,
  deleteBus
} = require("../controllers/busController");

// Define Routes
router.get("/", getBuses); // GET all buses
router.post("/add",authMiddleware,isadmin,addBus); // ADD a new bus
router.put("/update/:id",authMiddleware,isadmin, updateBus); // UPDATE a bus
router.delete("/delete/:id",authMiddleware,isadmin, deleteBus); // DELETE a bus

module.exports = router;
