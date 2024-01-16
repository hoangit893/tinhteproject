const serilizerUserResponse = (user) => {
  const newUser = {};

  for (let key in user._doc) {
    if (key !== "password") {
      newUser[key] = user[key];
    }
  }
  return newUser;
};

module.exports = { serilizerUserResponse };
