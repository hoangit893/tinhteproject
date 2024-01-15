const serilizerUserResponse = (user) => {
  const newUser = {};

  for (let key in user) {
    if (key !== "password") {
      newUser[key] = user[key];
    }
  }
  return newUser;
};

module.exports = { serilizerUserResponse };
