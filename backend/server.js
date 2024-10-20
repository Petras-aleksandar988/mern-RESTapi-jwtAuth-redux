import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorMiddleware.js";
import goals from "./routes/goalRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB()

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/goals", goals);

app.use(errorHandler)

app.listen(port, () => console.log(`Server is ruuning on ${port}`));
