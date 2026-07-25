import mongoose from "mongoose";

const consultancySchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        organization: String,
        service: String,
        message: String,

        status: {
            type: String,
            enum: ["NEW", "REPLIED"],
            default: "NEW",
        },

        adminReply: String,
        repliedAt: Date,
    },
    { timestamps: true }
);

export default mongoose.model("Consultancy", consultancySchema);