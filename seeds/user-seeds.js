const { User } = require('../models');

const userData = [
    {
        "username": "fakeuser",
        "email": "fake@gmail.com",
        "password": "pass123"
    },
    {
        "username": "anotherUser",
        "email": "person@gmail.com",
        "password": "pass456"
    },
    {
        "username": "codeRRR",
        "email": "coder@gmail.com",
        "password": "pass789"
    },
    {
        "username": "johnDoe",
        "email": "john@gmail.com",
        "password": "pass789"
    },
    {
        "username": "ConorO",
        "email": "notmyeamil@gmail.com",
        "password": "pass789"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;