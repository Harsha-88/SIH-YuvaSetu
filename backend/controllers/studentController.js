import Student from "../models/Student.js";
export const getProfile = async (req, res) => { const student = await Student.findById(req.userId).select("-password"); res.json(student); };