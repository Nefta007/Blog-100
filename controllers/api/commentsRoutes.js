const router = require('express').Router();
const { Comment } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const blogComment = await Comment.create({
            blog_comment: req.body.blog_comment,
            blogpost_id: req.body.blogpost_id,
            user_id: session.user_id,
        });
        res.status(200).json(blogComment);
    } catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;