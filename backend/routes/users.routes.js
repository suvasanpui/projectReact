// Import external dependencies and configuration
const express = require("express");
const route = express.Router();
const { jwtmiddleware, generateToken } = require("./../auth/jwt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Import User model
const User = require("./../models/users.models");

/**
 * User Registration Endpoint
 * POST /signup
 * Purpose: Register new voters and one admin
 * Validations:
 * - Only one admin account allowed
 * - Voter number must be 12 digits
 * - Contact must be at least 10 digits
 * - Age must be 18 or above
 */
route.post("/signup", async (req, res) => {
  try {
    const data = req.body;

    // Validate admin creation (only one admin allowed)
    const isAdmin = await User.findOne({ role: "admin" });
    if (data.role === "admin" && isAdmin) {
      return res.status(400).json({ error: "Please correct your Role" });
    }

    // Validate voter (Aadhar) number - must be exactly 12 digits
    var voterNoOfDigit = data.voterNo.toString().length;
    if (voterNoOfDigit < 12 || voterNoOfDigit > 12) {
      return res
        .status(400)
        .json({ error: "Addhar number should be 12 digit" });
    }

    // Validate contact number - must be at least 10 digits
    var contactNoOfDigit = data.contact.toString().length;
    if (contactNoOfDigit < 10) {
      return res
        .status(400)
        .json({ error: "Contact number shoud be greater than 10 digit" });
    }

    // Validate age requirement - must be 18 or older
    if (data.age < 18) {
      return res
        .status(400)
        .json({ error: "age should be greater or equal to 18" });
    } else {
      // Create and save new user
      const newUser = new User(data);
      const response = await newUser.save();
      console.log("Data insert successfully");

      // Generate JWT token for authentication
      const jwtPayload = {
        id: response.id,
      };
      console.log(JSON.stringify(jwtPayload));
      const token = generateToken(jwtPayload);
      console.log("token", token);

      // Return success response with user data and token
      res.status(200).json({ response: response, token: token });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * User Login Endpoint
 * POST /login
 * Purpose: Authenticate users and provide access token
 * Process:
 * 1. Validate voter number exists
 * 2. Verify password matches
 * 3. Generate JWT token for session
 */
route.post("/login", async (req, res) => {
  try {
    //extrct username and password fom request body
    const { voterNo, password } = req.body;
    //check username in person database
    const user = await User.findOne({ voterNo: voterNo });
    if (!user) {
      return res.status(403).json({ message: "user not exist" });
    }
    if (!user || !(await user.comparePassword(password))) {
      //comparePassword is a function that match user with a password
      return res.status(401).json({ error: "Invalid Username or Password" });
    }

    //generate token
    const userPayload = {
      id: user.id,
      voterNo: user.voterNo,
    };
    //token generate
    const token = generateToken(userPayload);
    //return response
    res
      .status(200)
      .json({ message: "login successfully", response: user, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

// Export router configuration
module.exports = route;
