const router = require('express').Router();
const { Appliance, Recipe } = require('../db')

// get all appliances
router.get('/', async (req, res, next) => {
    try {
        const appliances = await Appliance.findAll();
        res.send(appliances)
    } catch(err) {
        next(err)
    }
})

// get single appliance, includes recipes
router.get('/:id', async (req, res, next) => {
    try {
        const appliance = await Appliance.findByPk(req.params.id, {
            include: {
                model: Recipe
            }
        })
        res.send(appliance)
    } catch(err) {
        next(err)
    }
})

// add new appliance; require isAdmin middleware
router.post('/add-appliance', async (req, res, next) => {
    try {
        const appliance = await Appliance.create(req.body)
        res.send(appliance)
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const appliance = await Appliance.findByPk(req.params.id)
        await appliance.destroy()
        res.sendStatus(200)
    } catch(err) {
        next(err)
    }
})

module.exports = router