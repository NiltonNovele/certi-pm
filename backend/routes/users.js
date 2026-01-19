import express from "express";
import User from "../models/User.js";

const router = express.Router();

/* LIST USERS */
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for users" });
  }
});

/* LOCK/UNLOCK */
router.patch("/:id/block", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isBlocked = !user.isBlocked;
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
});

/* STATISTICS */
router.get("/stats/overview", async (req, res) => {
  try {
    const total = await User.countDocuments();
    const blocked = await User.countDocuments({ isBlocked: true });
    const active = total - blocked;

    res.json({
      total,
      active,
      blocked
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching statistics" });
  }
});

/* USER DETAILS */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error when searching for users" });
  }
});

export default router;