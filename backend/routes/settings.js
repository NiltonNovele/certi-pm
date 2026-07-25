import express from "express";
import Settings from "../models/Settings.js";

const router = express.Router();

/* GET SETTINGS */
router.get("/", async (req, res) => {
  let settings = await Settings.findOne();

  if (!settings) {
    settings = await Settings.create({});
  }

  res.json(settings);
});

/* UPDATE SETTINGS */
router.put("/", async (req, res) => {
  let settings = await Settings.findOne();

  if (!settings) {
    settings = await Settings.create(req.body);
  } else {
    Object.assign(settings, req.body);
    await settings.save();
  }

  res.json(settings);
});

export default router;