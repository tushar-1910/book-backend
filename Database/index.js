const mongoose = require("mongoose");
require("dotenv").config();

let connectDB = async () => {
  let URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
