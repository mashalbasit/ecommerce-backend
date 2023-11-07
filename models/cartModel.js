import mongoose from "mongoose"

const cartSchema = mongoose.Schema ({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},

    items: [{
        productid:{type: mongoose.Schema.Types.ObjectId, ref:"Product"},
        quantity:{type: Number, default: 1, min:1, max:50},
        totalPrice:{type: Number}
    }],
    
    totalCartPrice:{type: Number},
    createdAt:{type: Date, default:Date.now}

})

const schema = mongoose.model("Cart", cartSchema)
export default schema 