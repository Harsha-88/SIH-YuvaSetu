import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String },
  location: { type: String },
  skills: { type: [String], default: [] },
  capacity: { type: Number, default: 1 },
  allocated: { type: Number, default: 0 },
  description: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Internship", internshipSchema);