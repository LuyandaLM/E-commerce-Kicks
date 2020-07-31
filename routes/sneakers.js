const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Sneaker = require("../models/Sneaker");

// @route GET api/sneakers
// @desc Get all users sneakers
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const sneakers = await Sneaker.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(sneakers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/sneakers
// @desc Add new sneaker
// @access Private
router.post(
  "/",
  [auth, [check("make", "Make is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { make, brand, price, type, size } = req.body;

    try {
      const newSneaker = new Sneaker({
        make,
        brand,
        price,
        type,
        size,
        user: req.user.id,
      });

      const sneaker = await newSneaker.save();

      res.json(sneaker);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT api/sneakers/:id
// @desc Update sneaker
// @access Private
router.put("/:id", auth, async (req, res) => {
  const { make, brand, price, type, size } = req.body;

  // Build Contact Object
  const sneakerFields = {};
  if (make) sneakerFields.make = make;
  if (brand) sneakerFields.brand = brand;
  if (price) sneakerFields.price = price;
  if (type) sneakerFields.type = type;
  if (size) sneakerFields.size = size;

  try {
    let sneaker = await Sneaker.findById(req.params.id);

    if (!sneaker) return res.status(404).json({ msg: "Sneaker not found" });

    //Make sure user owns contact
    if (sneaker.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    sneaker = await Sneaker.findByIdAndUpdate(
      req.params.id,
      { $set: sneakerFields },
      { new: true }
    );

    res.json(sneaker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route Delete api/sneakers/:id
// @desc Delete sneaker
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let sneaker = await Sneaker.findById(req.params.id);

    if (!sneaker) return res.status(404).json({ msg: "Sneaker not found" });

    //Make sure user owns contact
    if (sneaker.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    await Sneaker.findByIdAndRemove(req.params.id);

    res.json({ msg: "Sneaker Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
