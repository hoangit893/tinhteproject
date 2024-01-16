const serilizerUserResponse = (user) => {
  const newUser = {};

  for (let key in user._doc) {
    if (key !== "password") {
      newUser[key] = user[key];
    }
  }
  console.log(newUser);
  return newUser;
};

module.exports = { serilizerUserResponse };
