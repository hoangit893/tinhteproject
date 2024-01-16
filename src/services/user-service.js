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

const getUserByUsernameService = async (username) => {
  const filter = { username: username };
  const user = await User.findOne(filter);
  return serilizerUserResponse(user);
};

const getUserForAuthService = async (username) => {
  const filter = { username: username };
  return await User.findOne(filter);
};

module.exports = {
  createUserService,
  getUserByUsernameService,
  getUserForAuthService,
  // addPostToUserService,
};
