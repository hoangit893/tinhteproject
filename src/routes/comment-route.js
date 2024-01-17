const commentRouters = require('express').Router();


const { createComment, getCommentListByPost } = require('../controllers/comment-controller');
const authenticateToken = require('../middlewares/authenticateToken');


commentRouters.post('/create', authenticateToken, (req, res) => createComment(req, res));

commentRouters.get('/:postId', (req, res) => getCommentListByPost(req, res));

module.exports = { commentRouters };