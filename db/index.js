const { Post, User, Comment } = require('./models');
const { getRandomIdByType } = require('../utils');

exports.createUser = () => {
  return User.create({});
};

exports.createPost = () => {
  return Post.create({
    user_id: getRandomIdByType(User),
  });
};

exports.createComment = () => {
  return Comment.create({
    user_id: getRandomIdByType(User),
    post_id: getRandomIdByType(Post),
  });
};
