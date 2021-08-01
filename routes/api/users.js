const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { User, Post, Comment } = require('../../db/models');
const db = require('../../db');

router.get('', asyncHandler(async (req, res) => {
  const users = await User.findAll({ include: [Post, Comment] });
  res.json(users);
}));

router.post('', asyncHandler(async (_req, res) => {
  await db.createUser();
  res.redirect('/api/users');
}));

module.exports = router;
