const router = require('express').Router();

router.use('/recipes', require('./recipes'));
router.use('/cuisines', require('./cuisines'));
router.use('/restrictions', require('./restrictions'));
router.use('/ingredients', require('./ingredients'))
router.use('/appliances', require('./appliances'))

module.exports = router;
