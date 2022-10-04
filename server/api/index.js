const router = require('express').Router();

router.use('/recipes', require('./recipes'));
router.use('/cuisines', require('./cuisines'));
router.use('/restrictions', require('./restrictions'));

module.exports = router;