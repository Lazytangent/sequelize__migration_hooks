const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');

router.get('', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}));

router.post('', asyncHandler(async (_req, res) => {
  await User.create({});
  res.redirect('/api/users');
}));

module.exports = router;
