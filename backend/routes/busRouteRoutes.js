const express = require("express");
const { authMiddleware, isadmin } = require("../middleware/authmiddleware");
const router = express.Router();
const { getBusRoutes, addBusRoute } = require("../controllers/busRouteController");

// 1. Get All Routes (Public)
router.get("/", getBusRoutes);

// 2. Add Route (Admin Only)
router.post("/add", authMiddleware, isadmin, addBusRoute);

module.exports = router;
