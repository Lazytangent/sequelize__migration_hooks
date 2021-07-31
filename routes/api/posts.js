const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Post } = require('../../db/models');

router.get('', asyncHandler(async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
}));

module.exports = router;
