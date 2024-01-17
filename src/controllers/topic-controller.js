const { getTopicListService } = require("../services/topic-service")



const getTopicList = (req, res) => {
    getTopicListService()
        .then((topicList) => {
            res.json(topicList).status(200)
        })
        .catch((err) => {
            res.json(err).status(500)
        })
}

module.exports = { getTopicList }