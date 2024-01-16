const { getPostByAuthor } = require("../controllers/post-controller");
const { User } = require("../models/user-model");
const { serilizerUserResponse } = require("../utils/serilizer");
const mongoose = require("mongoose");

const createUserService = async ({
  username,
  password,
  email,
  profileImage = "",
}) => {
  const newUser = new User({
    username,
    password,
    email,
    profileImage,
    createDate: new Date(),
  });
  await newUser.save();
  return "OK";
};

const getUserByUsername = async (username) => {
  const filter = { username: username };
  const user = serilizerUserResponse(await User.findOne(filter));
  return user;
};

const getUserForAuth = async (username) => {
  const filter = { username: username };
  return await User.findOne(filter);
};

// const getPasswordByUsername = async (username) => {
//   const filter = { username: username };
//   return await User.findOne(filter).select("password");
// };

const addPostToUser = async (username) => {
  user = await getUserByUsername(username);
  let postList = await getPostByAuthor(username);
  postList = postList.map((post) => post._id);
  user.posts = postList;
  return await user.save();
};

module.exports = {
  createUserService,
  getUserByUsername,
  getUserForAuth,
  addPostToUser,
};
