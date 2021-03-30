const { User } = require('../models');

const userData = [
    {
        "username": "datapirate",
        "email": "matt@gmail.com",
        "password": "pass123",
        "github": "github.com/datapirate",
        "linkedin": "linkedin.com/matt",
        "bio": "UC Berkeley Coding Bootcamp student, aspiring to be a web developer!"
    },
    {
        "username": "codebreaker",
        "email": "abby@gmail.com",
        "password": "pass456",
        "github": "github.com/abbyb",
        "linkedin": "linkedin.com/abbyb",
        "bio": "Entry level web developer specializing in JavaScript. Looking to network with other beginner devs!"
    },
    {
        "username": "infiniteloop",
        "email": "eddie@gmail.com",
        "password": "pass789",
        "github": "github.com/infiniteloop",
        "linkedin": "linkedin.com/eddie",
        "bio": "Based in the SF Bay Area. Undergrad in CS."
    },
    {
        "username": "johnDoe",
        "email": "john@gmail.com",
        "password": "pass789",
        "github": "github.com/johnDoe",
        "linkedin": "linkedin.com/john",
        "bio": "Into all things dev. Let's connect!"
    },
    {
        "username": "eddieg",
        "email": "eddie@gmail.com",
        "password": "pass789",
        "github": "github.com/eddg",
        "linkedin": "linkedin.com/eddieg",
        "bio": "Newly graduated coding boot camp alumni. Looking for my next big opportunity!"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;