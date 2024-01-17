const { Comment } = require('../models/comment-model');
const { getUserByUsernameService } = require('./user-service');
const { addCommentToPost } = require('./post-service');


const createCommentService = async (newComment) => {
    await Comment.create(newComment);
    await addCommentToPost(newComment.post._id);
    return "OK";
}

const getCommentListByPostService = async (postId) => {
    return await Comment.find({ post: postId });
}

module.exports = { createCommentService, getCommentListByPostService };