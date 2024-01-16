const mongoose = require("mongoose");
const { Topic } = require("../models/topic-model");

const createTopicService = async (newTopic) => {
  await Topic.create(newTopic);
  return "OK";
};

const isTopicExist = async (topicName) => {
  const filter = { topicName: topicName };
  const topicList = Topic.find(filter);
  return topicList.length > 0;
};

module.exports = { createTopicService, isTopicExist };
