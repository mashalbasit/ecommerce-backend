import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { router as userRouter } from "./routers/userRouter.js"
import { router as productRouter} from "./routers/productRouter.js"
import { router as cartRouter } from "./routers/cartRouter.js"
import { router as orderRouter } from "./routers/orderRouter.js"

const app = express();
  dotenv.config();
  app.use(bodyParser.json());

  app.use("/api", userRouter)
  app.use("/api", productRouter)
  app.use("/api", cartRouter)
  app.use("/api", orderRouter)

  mongoose.connect(process.env.DB_URL)
  mongoose.connection.once("connected", () => {
    console.log("Database Connected")
  })
  
  app.listen(process.env.PORT, () => {
    console.log(`Server iss running on: ${process.env.PORT}`)
  })