const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
  await mongoose.connect(MONGO_URI);
  return "connect DB ok";
}

module.exports = { connectDB };
