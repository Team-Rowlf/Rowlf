const router = require('express').Router();
const { Appliance, Recipe } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

// get all appliances
router.get('/', async (req, res, next) => {
  try {
    const appliances = await Appliance.findAll();
    res.send(appliances);
  } catch (err) {
    next(err);
  }
});

// get single appliance, includes recipes
router.get('/:id', async (req, res, next) => {
  try {
    const appliance = await Appliance.findByPk(req.params.id, {
      include: {
        model: Recipe,
      },
    });
    res.send(appliance);
  } catch (err) {
    next(err);
  }
});

//ADMIN ROUTES
// add new appliance; require isAdmin middleware
router.post('/add-appliance', requireToken, isAdmin, async (req, res, next) => {
  try {
    const appliance = await Appliance.create(req.body);
    res.send(appliance);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const appliance = await Appliance.findByPk(req.params.id);
    await appliance.destroy();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
