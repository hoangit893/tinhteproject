const getUserByUsernameService = require("./user-service");
const { serilizerUserResponse } = require("../utils/serilizer");
const { mongoose } = require("mongoose");
const { Post } = require("../models/post-model");

const createPostService = async (newPost) => {
  await Post.create(newPost);
  return "OK";
};

const getPostListbyAuthorService = async (authorName) => {
  const author = await getUserByUsernameService(authorName);
  const post = await Post.find({
    author: author._id,
  })
    .select("_id title content topic createDate -author")
    .populate("author");

  return post;
};

const getPostListByTopicService = async (topic) => {
  let post = await Post.find({
    topic: topic,
  })
    .select("_id title content topic createDate")
    .populate("author");
  post.author = serilizerUserResponse(post.author);
  return post;
};

module.exports = {
  createPostService,
  getPostListbyAuthorService,
};
