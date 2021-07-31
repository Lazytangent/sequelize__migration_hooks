const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Comment } = require('../../db/models');

router.get('', asyncHandler(async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
}));

module.exports = router;
