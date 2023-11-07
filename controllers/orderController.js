import Order from "../models/orderModel.js";

//Creating Order
export const createOrder = async (req, res) => {
  try {
    const {userId, productId, totalAmount, shippingAddress, paymentMethod, transactionId, orderStatus} = req.body;
    const newOrder = new Order({userId, productId, totalAmount, shippingAddress, paymentMethod, transactionId, orderStatus});

    await newOrder.save();

    res.status(200).json(newOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Getting All orders
export const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Getting Single Order
export const getSingleOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findById(id);
  
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Updating Order
export const updateOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
  
      const order = await Order.findByIdAndUpdate(id, updatedData, { new: true });
  
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Deleting Order
export const deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
  
      const order = await Order.findByIdAndDelete(id);
  
      if (order) {
        res.status(200).json({ message: "Order deleted successfully" });
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
