const mongoose = require("mongoose");
const { Topic } = require("../models/topic-model");

const createTopicService = async (newTopic) => {
  await Topic.create(newTopic);
  return "OK";
};

const isTopicExist = async (topicName) => {
  const filter = { topicName: topicName };
  const topicList = await Topic.find(filter);
  return topicList.length > 0;
};

const getTopicByName = async (topicName) => {
  const filter = { topicName: topicName };
  const topic = Topic.findOne(filter);
  return topic;
};

module.exports = { getTopicByName, isTopicExist };
