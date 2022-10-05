const router = require('express').Router();
const { Restriction, Recipe } = require('../db')

// get all recipes
router.get('/', async (req, res, next) => {
    try {
        const restrictions = await Restriction.findAll();
        res.send(restrictions)
    } catch (err) {
        next(err)
    }
})

// get recipes by specific restriction tag
router.get('/:id', async (req, res, next) => {
    try {
        const restriction = await Restriction.findByPk(req.params.id, {
            include: {
                model: Recipe
            }
        })
        res.send(restriction)
    } catch (err) {
        next(err)
    }
})

module.exports = router;