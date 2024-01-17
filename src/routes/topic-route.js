const { getTopicList } = require("../controllers/topic-controller");

const topicRoutes = require("express").Router();


topicRoutes.get("/", (req, res) => getTopicList(req, res));


module.exports = { topicRoutes };