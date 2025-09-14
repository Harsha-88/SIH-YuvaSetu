import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  location: { type: String },
  skills: { type: [String], default: [] },
  firstTimer: { type: Boolean, default: true },
  category: { type: String, enum: ["General", "SC", "ST", "OBC", "EWS"], default: "General" },
  createdAt: { type: Date, default: Date.now }
});

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.comparePassword = async function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model("Student", studentSchema);