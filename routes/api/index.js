const router = require('express').Router();

router.get('', (_req, res) => {
  res.send('Hello World');
});

module.exports = router;
