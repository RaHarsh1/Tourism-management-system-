const custmer = require('../models/Custmer');
const getCustmer = async (req, res) => {
  try {
    const cust = await custmer.find();
    res.status(200).json(cust);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getCustmer };
