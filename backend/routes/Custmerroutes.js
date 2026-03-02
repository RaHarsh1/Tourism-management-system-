const express = require('express');
const {getCustmer} = require('../controllers/CustmerController');
const router = express.Router();


router.get("/",getCustmer);


module.exports = router;