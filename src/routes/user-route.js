const { get } = require("mongoose");
const { getUserByUsername } = require("../services/user-service");
const { serilizerUserResponse } = require("../utils/serilizer");

const userRoutes = require("express").Router();

userRoutes.get("/:username", async (req, res) => {
  res.json(await getUserByUsername(req.params.username)).status(200);
});

module.exports = { userRoutes };
