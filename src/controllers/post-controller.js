const { Post } = require("../models/post-model");
const { Comment } = require("../models/comment-model");
const {
  createPostService,
  getPostListbyAuthorService,
} = require("../services/post-service");
const { getUserByUsername } = require("../services/user-service");
const { getUsernameFromJWT } = require("../utils/getUsernameFromJWT");

const createPost = async (req, res) => {
  try {
    const { title, content, topic } = req.body;
    let author = await getUserByUsername(req.user.username);

    let newPost = {
      author,
      title,
      content,
      topic,
      createDate: new Date(),
    };

    console.log(newPost);
    await createPostService(newPost);
    res.status(200).json("created post");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "There was an error creating the post" });
  }
};

const getPost = async (req, res) => {
  const posts = await Post.find().populate("comments");
  res.json(posts).status(200);
};

const getPostByAuthor = async (req, res) => {
  const author = await getUserByUsername(req.params.user);
  const posts = await getPostListbyAuthorService(author);
  res.json(posts).status(200);
};

// const getCommentByPost = async (req, res) => {
//   const { id } = req.params;
//   const post = await Post.findById(id).populate("comments");
//   const comments = post.comments;
//   res.json(comments).status(200);
// };

module.exports = {
  createPost,
  getPostByAuthor,
  // getCommentByPost,
  getPost,
};
