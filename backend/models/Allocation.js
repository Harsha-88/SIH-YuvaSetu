import mongoose from "mongoose";

const allocationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  internship: { type: mongoose.Schema.Types.ObjectId, ref: "Internship", required: true },
  score: { type: Number, required: true },
  status: { type: String, enum: ["allocated", "waitlisted"], default: "allocated" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Allocation", allocationSchema);