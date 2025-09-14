import Student from "../models/Student.js";
import jwt from "jsonwebtoken";

const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await Student.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });
    const student = await Student.create({ name, email, password });
    const token = signToken(student._id);
    res.status(201).json({ token, student });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || !(await student.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = signToken(student._id);
    res.json({ token, student });
  } catch (err) { res.status(500).json({ message: err.message }); }
};