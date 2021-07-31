const router = require('express').Router();

const usersRouter = require('./users');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');

router.use('/users', usersRouter);
router.use('/posts', postsRouter);
router.use('/comments', commentsRouter);

router.get('', (_req, res) => {
  res.send('Hello World');
});

module.exports = router;
