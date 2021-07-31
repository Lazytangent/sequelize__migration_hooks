const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Post, User } = require('../../db/models');
const { getRandomId } = require('../../utils');

router.get('', asyncHandler(async (_req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
}));

router.post('', asyncHandler(async (_req, res) => {
  const users = await User.findAll();
  const user_id = getRandomId(users);
  await Post.create({ user_id });
  res.redirect('/api/posts');
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/api/posts');
}));

module.exports = router;
