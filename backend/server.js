import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import reviewRoutes from "./routes/review.route.js";
import checkoutRoutes from "./routes/checkout.route.js";
import stripeRoutes from "./routes/stripe.route.js"
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5555;

const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://crumbly.netlify.app", // Deployed frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true, // Allow cookies or Authorization headers
  })
);



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send(`<h1>This is the backend app for the reviews in our OCC-Capstone-Project!</h1>`);
});
app.use("/api/reviews", reviewRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/stripe", stripeRoutes);

// Connect to database and start server
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${PORT}`);
});
