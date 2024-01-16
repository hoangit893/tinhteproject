const { getTopicList } = require("../services/topic-service");

const topicRoutes = require("express").Router();


topicRoutes.get("/", getTopicList());


module.exports = { topicRoutes };