const { createUser, logIn } = require("../controllers/user-controller.js");
const authenticateToken = require("../middlewares/authenticateToken.js");

const authRoutes = require("express").Router();

authRoutes.post("/register", (req, res, logIn) => createUser(req, res, logIn));

authRoutes.post("/login", (req, res, next) => logIn(req, res, next));

module.exports = { authRoutes };
