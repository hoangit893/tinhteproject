require("dotenv").config();

const express = require("express");
const { connectDB } = require("./src/configs/db");
const { authRoutes } = require("./src/routes/auth-route");
const { postRoutes } = require("./src/routes/post-route");
const { userRoutes } = require("./src/routes/user-route");
const logger = require("./src/middlewares/logger");
const app = express();
// Load environment variables from .env file

const PORT = process.env.PORT || 3000;

//middleware for json
app.use(express.json());

//logger
app.use("/", logger);

// authRoutes
app.use("/auth", authRoutes);

// postRoutes
app.use("/post", postRoutes);

//userRoutes
app.use("/user", userRoutes);

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
