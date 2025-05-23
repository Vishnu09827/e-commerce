const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
const Cart = require("../models/Cart");

router.post("/", verifyToken, async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedCart = await newCart.save();

    res.status(200).json(savedCart);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    let carts = await Cart.find();

    res.status(200).json(carts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
