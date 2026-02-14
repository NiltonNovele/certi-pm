import express from "express";
import Consultancy from "../models/Consultancy.js";

const router = express.Router();


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

// REPLY TO REQUEST (Admin)

router.put("/:id/reply", async (req, res) => {
    try {
        const { adminReply } = req.body;

        const updated = await Consultancy.findByIdAndUpdate(
            req.params.id,
            {
                adminReply,
                status: "REPLIED",
                repliedAt: new Date(),
            },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Request not found" });
        }

        res.json(updated);
    } catch (err) {
        console.error("Reply consultancy error:", err);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;