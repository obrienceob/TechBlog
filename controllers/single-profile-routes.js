const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const passportAuth = require('../utils/auth');


// Promise.all that allows for two findAll queries to populate the profile pages

router.get('/:id', passportAuth,(req, res) => {
  Promise.all ([
    
  User.findAll({
    where: {
      // use the ID from the session
      id: req.params.id
    },
    attributes: [
      'username',
      'email',
      'github',
      'linkedin',
      'bio'
    ],
  }),
  
  Post.findAll({
        where: {
          // use the ID from the session
          user_id: req.params.id
        },
        attributes: [
          'id',
          'post_text',
          // 'title',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username','id']
            }
          },
          {
            model: User,
            attributes: ['username', 'email', 'github', 'linkedin', 'bio', 'id']
          }
        ]
      }) ])
        .then(arrData => {
          console.log('here is the data', arrData);

          // defining login status
          let loginStatus;
          if (typeof req.session.passport != 'undefined') {
            loginStatus =  req.session.passport.user;
          } else {
              loginStatus = false;
          }

          //serialize data before passing to template
          const users = arrData[0].map(user => user.get({ plain: true }));
          const posts = arrData[1].map(post => post.get({ plain: true }));
          res.render('single-profile', { posts, users, loggedIn: loginStatus }); 
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });
        
  
  module.exports = router;