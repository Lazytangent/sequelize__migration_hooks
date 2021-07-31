const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { User } = require('../../db/models');

router.get('', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}));

module.exports = router;
