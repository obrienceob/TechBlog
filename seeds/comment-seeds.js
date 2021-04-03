const { Comment } = require('../models');

const commentData = [
    {
        "content": "Best joke I've ever seen on this tech blog",
        "user_id": 2,
        "blog_id": 1
    },
    {
        "content": "This joke is a hardware problem...",
        "user_id": 3,
        "blog_id": 1
    },
    {
        "content": "Here's a test comment, too!",
        "user_id": 1,
        "blog_id": 2
    }
];





const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;