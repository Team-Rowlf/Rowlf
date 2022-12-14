const router = require('express').Router();
const { Ingredient } = require('../db')

// basic get all; may want to later find all recipes with specific ingredients? will have to think about how to do that
router.get('/', async (req, res, next) => {
    try {
        const ingredients = await Ingredient.findAll();
        res.send(ingredients)
    } catch(err) {
        next(err)
    }
})

router.post('/add-ingredient', async (req, res, next) => {
    try {
        // may want to change this to find or create; depends how it gets used
        const ingredient = await Ingredient.create(req.body)
        res.send(ingredient)
    } catch(err) {
        next(err)
    }
}) 

module.exports = router
