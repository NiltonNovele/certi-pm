// index.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

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
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

// Endpoint to create payment link
app.post("/api/create-payment", async (req, res) => {
  try {
    const { amount, description, user_id } = req.body;

    if (!amount || !description || !user_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const response = await axios.post(
      "https://api.riha.co.mz/payment-links",
      {
        amount: 1,
        currency: "MT",
        description,
        redirect_url: process.env.REDIRECT_URL || "https://certi-pm.vercel.app/projectQuiz",
        webhook_url: process.env.WEBHOOK_URL || "https://certi-pm.vercel.app/api/webhook",
        metadata: { user_id, plan: "premium" },
        escrow_enabled: false 
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.RIHA_API_KEY,
        },
      }
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

// Webhook endpoint to receive payment notifications
app.post("/api/webhook", (req, res) => {
  try {
    const event = req.body.event;
    const data = req.body.data;

    console.log("Webhook received:", event, data);

    if (event === "payment.completed") {
      console.log(`Payment completed for user: ${data.metadata.user_id}`);
      // Here you can update your database to mark the user as "paid"
      // e.g., mark user as allowed to take the quiz
    }

    // Respond 200 to acknowledge receipt
    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Webhook processing error:", error.message);
    res.status(500).send("Error processing webhook");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
