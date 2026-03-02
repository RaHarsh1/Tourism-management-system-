const express = require("express");
const {
  register,
  login,
  adminLogin,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

module.exports = router;
