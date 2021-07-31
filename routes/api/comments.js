const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Comment, User, Post } = require('../../db/models');
const { getRandomId } = require('../../utils');

router.get('', asyncHandler(async (_req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
}));

router.post('', asyncHandler(async (_req, res) => {
  const users = await User.findAll();
  const posts = await Post.findAll();
  const user_id = getRandomId(users);
  const post_id = getRandomId(posts);
  await Comment.create({ post_id, user_id });
  res.redirect('/api/comments');
}));

module.exports = router;
