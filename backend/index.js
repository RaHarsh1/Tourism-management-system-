const express = require("express");
const ConnectMongoDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const CustmerRoutes = require("./routes/Custmerroutes");
const packageRoutes = require("./routes/packagesRoutes");
const busRoutes = require("./routes/busRoutes");

// Use Bus Route Routes (NEW: For Routes Management)
const busRouteRoutes = require("./routes/busRouteRoutes");

// Use Bus Booking Routes (NEW: For Booking Tickets)
const busBookingRoutes = require("./routes/busBookingRoutes");

const port = 4000;
const app = express();
// parse incoming JSON bodies
app.use(express.json());

ConnectMongoDB();

//cors
const cors = require("cors");
const path = require("path");
app.use(cors());

// Serve static files (images) from the 'uploads' directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

console.log("hello world");

app.get("/", (req, res) => {
  res.send("Hompage ....");
});

//login & register routes
app.use("/api/auth", authRoutes);

// This covers ALL package actions: Get, Add, Update, and Delete
app.use("/api/packages", packageRoutes);

// Use Bus Routes
app.use("/api/bus", busRoutes);

// Use Bus Route Routes (NEW: For Routes Management)
app.use("/api/bus-routes", busRouteRoutes);

// Use Bus Booking Routes (NEW: For Booking Tickets)
app.use("/api/bus-bookings", busBookingRoutes);

const staffRoutes = require("./routes/staffRoutes");
app.use("/api/staff", staffRoutes);

const bookingRoutes = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRoutes);

app.use("/api/cust", CustmerRoutes);

app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
