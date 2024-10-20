require("dotenv").config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("Connected to MongoDB"))
   .catch((err) => console.error("Could not connect to MongoDB", err));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/courses", courseRoutes);

app.get('/', (req, res) => {
    res.send("Hello, I am Scholar Station API");
});

// Start the server
app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});


