import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Admin Tests
import consultancyRoutes from "./routes/consultancy.js";
import opportunitiesRoutes from "./routes/opportunities.js";
// ...

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5006;

/* -------------------
   Middleware
------------------- */
app.use(cors({
  origin: [
    "http://localhost:3000",
    // Admin Tests
    "http://localhost:5173",
    // ...
    "https://certi-pm.vercel.app",
    "https://www.certipm.com",
    "https://certipm.com"
  ],
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

// Admin Tests
app.use("/api/consultancy", consultancyRoutes);
app.use("/api/vacancies", opportunitiesRoutes);
// ...

/* -------------------
   MongoDB Connections
------------------- */

if (!process.env.MONGO_URI || !process.env.MONGO_URI_VACANCY) {
  console.error("❌ Missing MongoDB environment variables");
  process.exit(1);
}

// Main DB
mongoose.set("bufferCommands", false);

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 10000,
  tls: true,
})
  .then(() => console.log("✅ Connected to main MongoDB"))
  .catch(err => {
    console.error("❌ Main MongoDB connection failed:", err.message);
    process.exit(1);
  });

/* -------------------
   Payment Endpoints
------------------- */
app.post("/api/create-payment", async (req, res) => {
  try {
    const { amount, description, user_id, redirect_url } = req.body;

    if (!amount || !description || !user_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const response = await axios.post(
      "https://api.riha.co.mz/payment-links",
      {
        amount,
        currency: "MT",
        description,
        redirect_url,
        webhook_url: process.env.WEBHOOK_URL || "https://api.certipm.com/api/webhook",
        metadata: { user_id, plan: "premium" },
        escrow_enabled: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.RIHA_API_KEY,
        },
      }
    );

    res.json({
      checkout_url: response.data.checkout_url,
      payment_link_id: response.data.id,
      status: response.data.status,
    });
  } catch (error) {
    console.error("❌ Payment error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create payment link" });
  }
});

app.post("/api/webhook", (req, res) => {
  console.log("🔔 Webhook received:", req.body?.event);
  res.status(200).send("Webhook received");
});

/* -------------------
   Start Server
------------------- */
app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});