require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/configs/db");
const { authRoutes } = require("./src/routes/auth-route");
const { postRoutes } = require("./src/routes/post-route");
const app = express();
// Load environment variables from .env file

const PORT = process.env.PORT || 3000;

//middleware for json
app.use(express.json());

// authRoutes
app.use("/auth", authRoutes);

// postRoutes
app.use("/post", postRoutes);

connectDB()
  .then((res) => {
    console.log(res);
    app.listen(PORT, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
