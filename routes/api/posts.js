const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Post } = require('../../db/models');
const db = require('../../db');

router.get('', asyncHandler(async (_req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
}));

router.post('', asyncHandler(async (_req, res) => {
  await db.createPost();
  res.redirect('/api/posts');
}));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
  await Post.destroy({ where: { id: req.params.id } });
  res.redirect('/api/posts');
}));

module.exports = router;
