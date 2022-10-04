const router = require('express').Router();

// router.use('/template', require('./template'));
router.use('/auth', require('./auth'));

module.exports = router;
