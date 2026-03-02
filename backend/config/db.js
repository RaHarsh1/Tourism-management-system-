const mongoose = require("mongoose");

const ConnectMongoDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/tms2");
     console.log(` MongoDB Connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = ConnectMongoDB;
