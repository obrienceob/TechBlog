const { Blog } = require('../models');

const postData = [
    {
        // 1
        "title": "Here's a post!",
        "content": "How many programmers does it take to change a lightblub? None - it's a hardware problem.",
        "creator_id": 1
    },
    {
        // 2
        "title": "Here's another post!",
        "content": "Another joke.....",
        "creator_id": 2
    },
]


const seedPosts = () => Blog.bulkCreate(postData);

module.exports = seedPosts;