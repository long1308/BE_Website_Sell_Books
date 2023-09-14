import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./router/product.js";
//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());
// router
app.use("/api", productRouter);
// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
