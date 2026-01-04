// index.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5006;

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

// -------------------
// MongoDB Connections
// -------------------

// Old database (existing)
const oldDbUri = process.env.MONGO_URI;

// New database for vacancies
const vacanciesDbUri = process.env.MONGO_URI_VACANCY.replace(/\/\?/, "/vacanciesDb?");

// -------------------
// Connect to old DB
// -------------------
mongoose.connect(oldDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to old MongoDB database"))
.catch(err => console.error("Old DB connection error:", err));

// -------------------
// Connect to vacancies DB (separate connection)
// -------------------
const vacanciesConnection = mongoose.createConnection(vacanciesDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

vacanciesConnection.on("connected", () => console.log("Connected to vacancies MongoDB database"));
vacanciesConnection.on("error", (err) => console.error("Vacancies DB connection error:", err));

// -------------------
// Vacancy Schema & Model
// -------------------
const vacancySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  position: String,
  company: String,
  location: String,
  type: { type: String, enum: ["Remote", "Hybrid", "On-site", "Contract", "Full-time"], default: "Full-time" },
  status: { type: String, enum: ["Open", "Closed", "Canceled"], default: "Open" },
  link: String,
}, { timestamps: true });

const Vacancy = vacanciesConnection.model("Vacancy", vacancySchema);

// -------------------
// Vacancy Endpoints
// -------------------

// Get all vacancies
app.get("/api/vacancies", async (req, res) => {
  try {
    const vacancies = await Vacancy.find().sort({ createdAt: -1 });
    res.json(vacancies);
  } catch (err) {
    console.error("Error fetching vacancies:", err.message);
    res.status(500).json({ error: "Failed to fetch vacancies" });
  }
});

// Create new vacancy
app.post("/api/vacancies", async (req, res) => {
  try {
    const vacancy = new Vacancy(req.body);
    await vacancy.save();
    res.status(201).json(vacancy);
  } catch (err) {
    console.error("Error creating vacancy:", err.message);
    res.status(500).json({ error: "Failed to create vacancy" });
  }
});

// Update vacancy
app.put("/api/vacancies/:id", async (req, res) => {
  try {
    const vacancy = await Vacancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vacancy) return res.status(404).json({ error: "Vacancy not found" });
    res.json(vacancy);
  } catch (err) {
    console.error("Error updating vacancy:", err.message);
    res.status(500).json({ error: "Failed to update vacancy" });
  }
});

// Delete vacancy
app.delete("/api/vacancies/:id", async (req, res) => {
  try {
    const vacancy = await Vacancy.findByIdAndDelete(req.params.id);
    if (!vacancy) return res.status(404).json({ error: "Vacancy not found" });
    res.json({ message: "Vacancy deleted successfully" });
  } catch (err) {
    console.error("Error deleting vacancy:", err.message);
    res.status(500).json({ error: "Failed to delete vacancy" });
  }
});

// -------------------
// Payment Endpoints
// -------------------
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
        escrow_enabled: false
      },
      { headers: { "Content-Type": "application/json", "x-api-key": process.env.RIHA_API_KEY } }
    );

    return res.json({
      checkout_url: response.data.checkout_url,
      payment_link_id: response.data.id,
      status: response.data.status,
    });
  } catch (error) {
    console.error("Error creating payment link:", error.response?.data || error.message);
    return res.status(500).json({ error: "Failed to create payment link" });
  }
});

app.post("/api/webhook", (req, res) => {
  try {
    const event = req.body.event;
    const data = req.body.data;

    console.log("Webhook received:", event, data);

    if (event === "payment.completed") {
      console.log(`Payment completed for user: ${data.metadata.user_id}`);
    }

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Webhook processing error:", error.message);
    res.status(500).send("Error processing webhook");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
