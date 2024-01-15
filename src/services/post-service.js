const { mongoose } = require("mongoose");
const { Post } = require("../models/post-model");
const { getUserByUsername } = require("./user-service");
const ObjectID = mongoose.Types.ObjectId;

const createPostService = async (newPost) => {
  await Post.create(newPost);
  return "OK";
};

const getPostListbyAuthorService = async (author) => {
  return await Post.aggregate({
    $match: { author: ObjectID(author._id) },
  })
    .populate("author")
    .exec();
};

module.exports = {
  createPostService,
  getPostListbyAuthorService,
};
