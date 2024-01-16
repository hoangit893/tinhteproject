const { getTopicListService } = require("../services/topic-service")



const getTopicList = async (res, req) => {
    req.json(await getTopicListService());
}

modules.export = {
    getTopicList
}