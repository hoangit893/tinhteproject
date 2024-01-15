const jwt = require("jsonwebtoken"); // Add the missing import statement
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    // Correct the callback parameter name to 'decoded'
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decoded; // Assign the decoded token to 'req.user'
    next();
  });
};

module.exports = authenticateToken;
