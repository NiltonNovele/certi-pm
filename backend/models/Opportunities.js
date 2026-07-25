import mongoose from "mongoose";

const opportunitySchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        company: { type: String, required: true },
        position: String,
        location: String,

        type: {
            type: String,
            enum: ["Remote", "Hybrid", "On-site", "Contract", "Full-time"],
            default: "Full-time",
        },

        link: String,
        description: String,

        status: {
            type: String,
            enum: ["Open", "Closed", "Canceled"],
            default: "Open",
        },
    },
    { timestamps: true }
);

export default mongoose.model("Opportunity", opportunitySchema);