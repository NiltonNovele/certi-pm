import express from "express";
import nodemailer from "nodemailer";
import Consultancy from "../models/Consultancy.js";

const router = express.Router();

// EMAIL TRANSPORTER
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// CREATE REQUEST (Frontend Form)
router.post("/", async (req, res) => {
    try {
        const { fullName, email, organization, service, message } = req.body;

        if (!fullName || !email || !message) {
            return res.status(400).json({ error: "Required fields missing" });
        }

        const newRequest = await Consultancy.create({
            fullName,
            email,
            organization,
            service,
            message,
        });

        res.status(201).json(newRequest);
    } catch (err) {
        console.error("Create consultancy error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// GET ALL REQUESTS (Admin)
router.get("/", async (req, res) => {
    try {
        const requests = await Consultancy.find().sort({ createdAt: -1 });
        res.json(requests);
    } catch (err) {
        console.error("Fetch consultancy error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

// REPLY TO REQUEST (Admin + EMAIL)
router.put("/:id/reply", async (req, res) => {
    try {
        const { adminReply } = req.body;

        const request = await Consultancy.findById(req.params.id);

        if (!request) {
            return res.status(404).json({ error: "Request not found" });
        }

        // SEND EMAIL
        await transporter.sendMail({
            from: `"CertiPM" <${process.env.EMAIL_USER}>`,
            to: request.email,
            subject: "Response to your consultancy request",
            html: `
                <p>Hello ${request.fullName},</p>

                <p>Thank you for contacting CertiPM.</p>

                <p>${adminReply}</p>

                <br/>
                <p><strong>Your original message:</strong></p>
                <p>${request.message}</p>

                <br/>
                <p>Best regards,<br/>CertiPM Team</p>
            `,
        });

        // UPDATE DB
        request.adminReply = adminReply;
        request.status = "REPLIED";
        request.repliedAt = new Date();

        await request.save();

        res.json(request);
    } catch (err) {
        console.error("Reply consultancy error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;