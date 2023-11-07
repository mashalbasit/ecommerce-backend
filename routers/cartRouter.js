import express from "express"
import { createCart, getUserCart, updateCart, deleteCart } from "../controllers/cartController.js"

const router = express.Router()

router.post("/cart/create", createCart)
router.get("/cart/:id", getUserCart)
router.put("/cart/:id", updateCart)
router.delete("/cart/:id", deleteCart)

export {router}