/*

// Consultancy

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Consultancy Schema & Model

const consultancySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  organization: String,
  service: String,
  message: String,
  status: {
    type: String,
    enum: ["NEW", "ANSWERED"],
    default: "NEW",
  },
  adminReply: String,
  repliedAt: Date,
}, {
  timestamps: true,
  bufferCommands: false,
});

const Consultancy = mongoose.model("Consultancy", consultancySchema);

// Endpoints:
// Create consultancy request
app.post("/api/consultancy", async (req, res) => {
  try {
    const consultancy = new Consultancy(req.body);
    await consultancy.save();
    res.status(201).json({ message: "Request submitted successfully" });
  } catch (err) {
    console.error("❌ Create consultancy failed:", err.message);
    res.status(500).json({ error: "Failed to submit request" });
  }
});
// Get all consultancy requests
app.get("/api/consultancy", async (req, res) => {
  try {
    const requests = await Consultancy.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (err) {
    console.error("❌ Fetch consultancy failed:", err.message);
    res.status(500).json({ error: "Failed to fetch requests" });
  }
});
// Reply to consultancy request
app.put("/api/consultancy/:id/reply", async (req, res) => {
  try {
    const { adminReply } = req.body;

    const request = await Consultancy.findByIdAndUpdate(
      req.params.id,
      {
        adminReply,
        status: "ANSWERED",
        repliedAt: new Date(),
      },
      { new: true }
    );

    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }
    // SEND EMAIL
    await transporter.sendMail({
      from: `"Certi PM Consulting" <${process.env.SMTP_USER}>`,
      to: request.email,
      subject: "Response to your consultancy request",
      html: `
        <p>Dear ${request.fullName},</p>

        <p>Thank you for contacting Certi PM. Below is our response to your request:</p>

        <blockquote style="border-left:4px solid #b91c1c;padding-left:12px">
          ${adminReply}
        </blockquote>

        <p>Best regards,<br/>
        Certi PM Team</p>
      `,
    });

    res.json({ message: "Reply sent and email delivered" });
  } catch (err) {
    console.error("❌ Reply consultancy failed:", err.message);
    res.status(500).json({ error: "Failed to reply" });
  }
});

// Users

import usersRoutes from "./routes/users.js";

app.use("/api/users", usersRoutes);

// Settings

import settingsRoutes from "./routes/settings.js";

app.use("/api/settings", settingsRoutes);

*/