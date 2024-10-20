const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup route
router.post("/signup", async (req, res) => {
    // handle user signup
});

// Login route
router.post("/login", async (req, res) => {
    // handle user login
});

module.exports = router;
