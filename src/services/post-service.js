const { getUserByUsernameService, getUserForAuthService } = require("./user-service");
const { serilizerUserResponse } = require("../utils/serilizer");
const { mongoose } = require("mongoose");
const { Post } = require("../models/post-model");
const { User } = require("../models/user-model");
const { Comment } = require("../models/comment-model");

const createPostService = async (newPost) => {
  await Post.create(newPost);
  return "OK";
};


const getPostByIdService = async (id) => {
  try {
    post = await Post.findById(id);
    return post;
  }
  catch (error) {
    console.error(error);
    return { error: "There was an error getting the post" };
  }
}

const getPostListService = async () => {
  let postList = await Post.find();
  return postList;
};

const getPostListbyAuthorService = async (authorName) => {
  const author = await getUserForAuthService(authorName);
  const post = await Post.find({
    author: author._id,
  })
    .select("_id title content topic createDate author")
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

const addCommentToPost = async (postId) => {
  const post = await Post.findById(postId);
  const commentList = await Comment.find({ post: postId });
  post.comments = commentList;
  await post.save();
};

module.exports = {
  createPostService,
  getPostListService,
  getPostListbyAuthorService,
  getPostListByTopicService,
  getPostByIdService,
  addCommentToPost
};
