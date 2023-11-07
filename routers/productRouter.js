import express from"express"
import { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } from "../controllers/productController.js"

const router = express.Router()

router.post("/product/register", createProduct)
router.get("/product", getAllProducts)
router.get("/product/:id", getSingleProduct)
router.put("/product/:id", updateProduct)
router.delete("/product/:id", deleteProduct)

export {router}