// index.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5006;

/* -------------------
   Middleware
------------------- */
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://certi-pm.vercel.app",
    "https://www.certipm.com",
    "https://certipm.com"
  ],
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

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

// Vacancies DB (SEPARATE CONNECTION)
const vacanciesConnection = mongoose.createConnection(
  process.env.MONGO_URI_VACANCY,
  {
    serverSelectionTimeoutMS: 10000,
    tls: true,
    bufferCommands: false,
  }
);

vacanciesConnection.on("connected", () => {
  console.log("✅ Connected to vacancies MongoDB");
});

vacanciesConnection.on("error", (err) => {
  console.error("❌ Vacancies MongoDB connection error:", err.message);
});

/* -------------------
   Vacancy Schema & Model
------------------- */
const vacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  position: String,
  company: String,
  location: String,
  type: {
    type: String,
    enum: ["Remote", "Hybrid", "On-site", "Contract", "Full-time"],
    default: "Full-time",
  },
  status: {
    type: String,
    enum: ["Open", "Closed", "Canceled"],
    default: "Open",
  },
  link: String,
}, {
  timestamps: true,
  bufferCommands: false,
});

const Vacancy = vacanciesConnection.model("Vacancy", vacancySchema);

/* -------------------
   Vacancy Endpoints
------------------- */

app.get("/api/vacancies", async (req, res) => {
  try {
    const vacancies = await Vacancy.find().sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (err) {
    console.error("❌ Fetch vacancies failed:", err.message);
    res.status(500).json({ error: "Failed to fetch vacancies" });
  }
});

app.post("/api/vacancies", async (req, res) => {
  try {
    const vacancy = new Vacancy(req.body);
    await vacancy.save();
    res.status(201).json(vacancy);
  } catch (err) {
    console.error("❌ Create vacancy failed:", err.message);
    res.status(500).json({ error: "Failed to create vacancy" });
  }
});

app.put("/api/vacancies/:id", async (req, res) => {
  try {
    const vacancy = await Vacancy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!vacancy) {
      return res.status(404).json({ error: "Vacancy not found" });
    }

    res.json(vacancy);
  } catch (err) {
    console.error("❌ Update vacancy failed:", err.message);
    res.status(500).json({ error: "Failed to update vacancy" });
  }
});

app.delete("/api/vacancies/:id", async (req, res) => {
  try {
    const vacancy = await Vacancy.findByIdAndDelete(req.params.id);

    if (!vacancy) {
      return res.status(404).json({ error: "Vacancy not found" });
    }

    res.json({ message: "Vacancy deleted successfully" });
  } catch (err) {
    console.error("❌ Delete vacancy failed:", err.message);
    res.status(500).json({ error: "Failed to delete vacancy" });
  }
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
