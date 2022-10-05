const router = require('express').Router();

// router.use('/template', require('./template'));
router.use('/user', require('./user'));

module.exports = router;
