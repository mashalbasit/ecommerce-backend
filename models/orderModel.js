import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User",required: true},
  
  productId: [{
      product: {type: mongoose.Schema.Types.ObjectId, ref: "Product"},
      quantity: {type: Number, required: true},
    }],
  
  totalAmount: {type: Number,min: 0, required: true},  
  orderDate: {type: Date, default: Date.now},
  
  shippingAddress: {
    street:{type: String},
    houseNo:{type: String},
    city:{type: String},
    postalCode:{type: String},
    country:{type: String}
  },
  
  paymentMethod: {type: String, required: true},
  transactionId:{type: String},

  orderStatus: {
    type: String, 
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending"
},

});

const Order = mongoose.model("Order", orderSchema);

export default Order;
