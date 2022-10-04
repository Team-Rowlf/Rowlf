const router = require('express').Router();

router.post('/', async (req, res, next) => {
  try {
    res.send(await User.authenticate(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
