import express from "express"
import { createOrder, getAllOrders, getSingleOrder, updateOrder, deleteOrder } from "../controllers/orderController.js"

const router = express.Router ()

router.post("/order/create", createOrder)
router.get("order", getAllOrders)
router.get("order/:id", getSingleOrder)
router.put("order/:id", updateOrder)
router.delete("/order/:id", deleteOrder)

export { router }