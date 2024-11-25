import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/auth"
import dataRoutes from "./routes/data"

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
}));
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/data", dataRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


export default app;
