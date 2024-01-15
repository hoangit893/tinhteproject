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
    _id: new mongoose.Types.ObjectId(),
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
  const user = await User.findOne(filter).exec();

  return user;
};

const getPasswordByUsername = async (username) => {
  const filter = { username: username };
  return await User.findOne(filter).select("password");
};

module.exports = {
  createUserService,
  getUserByUsername,
  getPasswordByUsername,
};
