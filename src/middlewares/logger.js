const createLog = (req, res, next) => {
  const ipRequest = req.ip;
  const { method, url } = req;
  const { statusCode } = res;
  console.log(`[${method} : ${ipRequest}]| ${url} |  ${statusCode}`);
  next();
};
module.exports = createLog;
