import express from "express";
import Opportunity from "../models/Opportunity.js";

const router = express.Router();

/* -----------------------
   GET ALL OPPORTUNITIES
----------------------- */
router.get("/", async (req, res) => {
    try {
        const opportunities = await Opportunity.find().sort({
            createdAt: -1,
        });

        res.json(opportunities);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch opportunities" });
    }
});

/* -----------------------
   CREATE OPPORTUNITY
----------------------- */
router.post("/", async (req, res) => {
    try {
        const opportunity = new Opportunity(req.body);
        await opportunity.save();

        res.status(201).json(opportunity);
    } catch (err) {
        res.status(500).json({ error: "Failed to create opportunity" });
    }
});

/* -----------------------
   UPDATE OPPORTUNITY
----------------------- */
router.put("/:id", async (req, res) => {
    try {
        const opportunity = await Opportunity.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!opportunity) {
            return res.status(404).json({ error: "Opportunity not found" });
        }

        res.json(opportunity);
    } catch (err) {
        res.status(500).json({ error: "Failed to update opportunity" });
    }
});

/* -----------------------
   DELETE OPPORTUNITY
----------------------- */
router.delete("/:id", async (req, res) => {
    try {
        const opportunity = await Opportunity.findByIdAndDelete(
            req.params.id
        );

        if (!opportunity) {
            return res.status(404).json({ error: "Opportunity not found" });
        }

        res.json({ message: "Opportunity deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete opportunity" });
    }
});

export default router;