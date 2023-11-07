import Cart from "../models/cartModel.js";

//Creating Cart
export const createCart = async (req, res) => {
  try {
    const { userId, items, totalCartPrice } = req.body
    const newCart = new Cart({userId, items, totalCartPrice});

    await newCart.save();

    res.status(200).json(newCart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Getting User Cart
export const getUserCart = async (req, res) => {
    try {
      const { userId } = req.params;
      const cart = await Cart.findOne({ userId });
  
      if (cart) {
        res.status(200).json(cart);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Updating Cart
export const updateCart = async (req, res) => {
    try {
      const { userId } = req.params;
      const updatedData = req.body;
  
      const cart = await Cart.findOneAndUpdate({ userId }, updatedData, { new: true });
  
      if (cart) {
        res.status(200).json(cart);
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
//Deleting Cart
export const deleteCart = async (req, res) => {
    try {
      const { userId } = req.params;
      const cart = await Cart.findOneAndRemove({ userId });
  
      if (cart) {
        res.status(200).json({ message: "Cart deleted successfully" });
      } else {
        res.status(404).json({ message: "Cart not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  