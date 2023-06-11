// const express = require('express'); -- add "type" : "module" in package.json --
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import router from "./routes/auth.js";

//console.log("process => ", process);

dotenv.config();

const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB ERROR => ", err));

// router middleware
app.use("/api", authRoutes);

const port = process.env.PORT|| 8000;

app.listen(port, () => {
    console.log(`Node server listening on port ${port}`);
});
