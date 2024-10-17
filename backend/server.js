import express from "express";
import dotenv from "dotenv";
import goals from "./routes/goalRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use("/api/goals", goals);

app.listen(port, () => console.log(`Server is ruuning on ${port}`));
