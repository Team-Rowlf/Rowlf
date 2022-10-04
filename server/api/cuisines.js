const router = require('express').Router();
const { Recipe, Cuisine } = require('../db')

// get all recipes
router.get('/', async (req, res, next) => {
    try {
        const cuisines = await Cuisine.findAll();
        res.send(cuisines)
    } catch (err) {
        next(err)
    }
})

// get recipes by specific cuisine tag
router.get('/:id', async (req, res, next) => {
    try {
        const cuisine = await Cuisine.findByPk(req.params.id, {
            include: {
                model: Recipe
            }
        })
        res.send(cuisine)
    } catch (err) {
        next(err)
    }
})

module.exports = router;