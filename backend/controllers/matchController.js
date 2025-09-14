import Internship from "../models/Internship.js";
import { matchStudentToInternships } from "../utils/matchEngine.js";
export const getMatches = async (req, res) => { const { studentProfile } = req.body; const internships = await Internship.find(); const matches = matchStudentToInternships(studentProfile, internships); res.json({ matches }); };