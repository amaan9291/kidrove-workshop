import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import enquiryRoutes from "./routes/enquiryRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

if (!MONGO_URI) {
  throw new Error("MONGO_URI is missing in environment variables");
}

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Kidrove Workshop API is running.",
    endpoints: {
      health: "/api/health",
      enquiry: "/api/enquiry",
    },
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Server is healthy.",
  });
});

app.use("/api", enquiryRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });