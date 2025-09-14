import Internship from "../models/Internship.js";
export const createInternship = async (req, res) => { const internship = await Internship.create(req.body); res.status(201).json(internship); };
export const listInternships = async (req, res) => { const all = await Internship.find(); res.json(all); };