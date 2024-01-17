const { get } = require("mongoose");
const { getUserById } = require("../controllers/user-controller");
const { getUserByUsername } = require("../services/user-service");
const { getPostByAuthor } = require("../controllers/post-controller");
const { serilizerUserResponse } = require("../utils/serilizer");

const userRoutes = require("express").Router();

userRoutes.get("/:username", async (req, res) => {
  res.json(await getUserByUsername(req.params.username)).status(200);
});

userRoutes.get("/:username/post", (req, res) => getPostByAuthor(req, res));

userRoutes.get("/getById/:id", (req, res) => getUserById(req, res));

module.exports = { userRoutes };
