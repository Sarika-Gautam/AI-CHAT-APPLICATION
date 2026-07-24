import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// ===============================
// MIDDLEWARE
// ===============================

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// ===============================
// ROUTES
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Nova AI Backend Running 🚀",
  });
});

app.use("/api/auth", authRoutes);


// ===============================
// 404
// ===============================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;