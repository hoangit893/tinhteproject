const { Post } = require("../models/post-model");
const { Comment } = require("../models/comment-model");
const {
  createPostService,
  getPostListbyAuthorService,
  getPostListService
} = require("../services/post-service");
const { Topic } = require("../models/topic-model");
const { getTopicByName, isTopicExist } = require("../services/topic-service");
const { getUserByUsernameService } = require("../services/user-service");

const createPost = async (req, res) => {
  try {
    let topic;
    if (await isTopicExist(req.body.topic)) {
      topic = await getTopicByName(req.body.topic);
    } else {
      await Topic.create({ topicName: req.body.topic });
      topic = await getTopicByName(req.body.topic);
    }

    const { title, content } = req.body;
    let author = await getUserByUsernameService(req.user.username);

    let newPost = {
      author: author,
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

const getPost = (req, res) => {
  getPostListService()
    .then((postList) => {
      res.json(postList).status(200);
    })
    .catch((err) => {
      res.json(err).status(500);
    });
};

const getPostByAuthor = async (req, res) => {
  // addPostToUser(req.user.username);
  const author = req.params.user;
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
  getPost,
};
