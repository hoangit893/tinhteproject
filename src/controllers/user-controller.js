const { serilizerUserResponse } = require("../utils/serilizer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AppError } = require("../errors/AppError");
const { User } = require("../models/user-model");
const {
  createUserService,
  getUserByUsername,
  getPasswordByUsername,
} = require("../services/user-service");

const HASH_ROUND = process.env.HASH_ROUND;
// create user
const createUser = async (req, res, next) => {
  try {
    const { username, password, email, profileImage = "" } = req.body;

    //check isExist
    const user = await getUserByUsername(username);
    // res.json(req.body);
    if (user) {
      res.json("User already exists!").status(400);
      throw new AppError("User already exists!", 400);
    } else {
      const hashPassword = await bcrypt.hash(password, Number(HASH_ROUND));
      const newUser = {
        username,
        password: hashPassword,
        email,
        profileImage,
      };
      await createUserService(newUser).then((message) => {
        const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ message, token }).status(200);
      });
    }
  } catch (AppError) {
    console.log(AppError);
  }
};

// login
const logIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new AppError("Missing input!", 400);
    }

    const user = await getUserByUsername(username);
    if (!user) {
      throw new AppError("User not found!", 404);
    }

    let hashPassword = await getPasswordByUsername(username);

    hashPassword = await getPasswordByUsername(username).then((res) => {
      return res.password;
    });
    const isMatch = await bcrypt.compare(password, hashPassword);

    if (!isMatch) {
      res.json("wrong").status(404);
      throw new AppError("Wrong password!", 404);
    }

    const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ token }).status(200);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createUser, logIn };
