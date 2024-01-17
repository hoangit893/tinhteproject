
const { getCommentListByPostService, createCommentService } = require("../services/comment-service");
const { getUserByUsernameService } = require("../services/user-service");
const { getPostByIdService } = require("../services/post-service");

const getCommentListByPost = async (req, res) => {
    const { postId } = req.params;
    if (!postId) return res.status(400).json({ error: "postId is required" });
    if (getPostByIdService(postId) === null) {
        return res.status(400).json({ error: "Not found" });
    } else try {
        const commentList = await getCommentListByPostService(postId);
        res.json(commentList).status(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "There was an error getting the comment list" });
    }
}

const createComment = async (req, res) => {
    const { content, postId } = req.body;
    const author = await getUserByUsernameService(req.user.username);
    const post = await getPostByIdService(postId);
    const newComment = {
        content,
        author,
        post,
        createDate: new Date(),
    };

    try {
        await createCommentService(newComment);
        res.status(200).json("created comment");
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "There was an error creating the comment" });
    }

};

module.exports = { getCommentListByPost, createComment };