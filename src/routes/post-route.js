const authenticateToken = require("../middlewares/authenticateToken.js");
const { getPostListByTopic } = require("../controllers/post-controller.js")
const postRoutes = require("express").Router();
const {
  createPost,
  getPostByAuthor,
  getPost,
} = require("../controllers/post-controller.js");

postRoutes.get("/", (req, res) => getPost(req, res));

postRoutes.post("/create", authenticateToken, (req, res) =>
  createPost(req, res)
);

postRoutes.get("/:topic", (req, res) => getPostListByTopic(req, res));

postRoutes.get("/", (req, res) => getAllPost(req, res));

module.exports = { postRoutes };
