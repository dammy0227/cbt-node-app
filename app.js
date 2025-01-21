const express = require("express");
const cors = require("cors");
const examRoutes = require("./routes/examRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/exam", examRoutes);

// Export the app (for Vercel)
module.exports = app;
