// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import helmet from "helmet";
// import rateLimit from "express-rate-limit";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import studentRoutes from "./routes/studentRoutes.js";
// import internshipRoutes from "./routes/internshipRoutes.js";
// import matchRoutes from "./routes/matchRoutes.js";



// import cors from "cors";

// app.use(cors({
//   origin: "https://sih-yuvasetu-aicldwaja-harshas-projects-74c42ba7.vercel.app",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));





// dotenv.config();
// connectDB();

// const app = express();

// app.use(helmet());
// app.use(express.json());
// app.use(cors({ origin: "*" }));

// const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
// app.use(limiter);

// app.use("/api/auth", authRoutes);
// app.use("/api/students", studentRoutes);
// app.use("/api/internships", internshipRoutes);
// app.use("/api/match", matchRoutes);

// app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));







































































import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import internshipRoutes from "./routes/internshipRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Security middlewares
app.use(helmet());
app.use(express.json());

// ✅ CORS middleware (only once)
app.use(
  cors({
    origin: "https://sih-yuvasetu-aicldwaja-harshas-projects-74c42ba7.vercel.app", // frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/internships", internshipRoutes);
app.use("/api/match", matchRoutes);

// Health check
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Server start
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
