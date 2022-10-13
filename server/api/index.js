const router = require('express').Router();

// router.use('/template', require('./template'));
router.use('/user', require('./user'));
router.use('/recipes', require('./recipes'));
router.use('/cuisines', require('./cuisines'));
router.use('/restrictions', require('./restrictions'));
router.use('/ingredients', require('./ingredients'));
router.use('/appliances', require('./appliances'));
router.use('/amazon', require('./amazon'));

module.exports = router;
