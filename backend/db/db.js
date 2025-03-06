// Load environment variables from .env file
require("dotenv").config();

// Import Mongoose library for MongoDB interactions
const mongoose = require("mongoose");

// Get MongoDB connection URL from environment variables
const mongoDBURL = process.env.mongo_url;

// Establish connection to MongoDB database
mongoose.connect(mongoDBURL);

// Get the default connection instance
const db = mongoose.connection;

// Event handler for successful database connection
db.on("connected", () => {
  console.log("Connection establish");
});

// Event handler for database disconnection events
db.on("disconnected", () => {
  console.log("Connection break");
});

// Event handler for connection errors
db.on("error", (err) => {
  console.log("fail to connect", err); // Fixed: Added missing err parameter
});

// Export database connection instance for use in other modules
module.exports = db;
