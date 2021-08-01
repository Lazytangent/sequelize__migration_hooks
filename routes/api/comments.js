const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Comment, User, Post } = require('../../db/models');
const { getRandomId } = require('../../utils');

router.get('', asyncHandler(async (_req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
}));

router.post('', asyncHandler(async (_req, res) => {
  await Comment.write();
  res.redirect('/api/comments');
}));

module.exports = router;
