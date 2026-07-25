import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    platformName: {
      type: String,
      default: "Certi PM"
    },
    contactEmail: {
      type: String,
      default: "admin@certipm.com"
    },
    language: {
      type: String,
      default: "en"
    },
    maintenanceMode: {
      type: Boolean,
      default: false
    },
    allowRegistrations: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Settings", settingsSchema);