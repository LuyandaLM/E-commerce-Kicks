const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Sneaker = require("../models/Sneaker");

// @route GET api/sneakers
// @desc Get all users sneakers
// @access Public
router.get("/", async (req, res) => {
  try {
    const sneakers = await Sneaker.find({ sneakers }).sort({
      date: -1,
    });
    res.json(sneakers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
