const jwt = require("jsonwebtoken");
function getUsernameFromJWT() {
  if (true) {
    const decodedToken = jwt.decode(
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InUzc2VyM25hZm1lczQzMjMiLCJpYXQiOjE3MDUxNDU5Mjd9.dvagBweH9dNgFml_jc4mN2j_5D_2sMpgyWdppWCSVhc"
    );
    if (decodedToken) {
      return decodedToken.username;
    }
  }
  return null;
}

module.exports = { getUsernameFromJWT };
