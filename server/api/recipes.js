const router = require('express').Router();
const { Recipe, Cuisine, Restriction, LineItem, Ingredient } = require('../db')

// get all recipes
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipe.findAll({include: [
            {model: Cuisine},
            {model: Restriction},
            {model: LineItem, include: {model: Ingredient}}
        ]})
        res.send(recipes)
    } catch(err) {
        next(err)
    }
})

// get single recipe
router.get('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id, {include: [
            {model: Cuisine},
            {model: Restriction},
            {model: LineItem, include: {model: Ingredient}}
        ]})
        res.send(recipe)
    } catch(err) {
        next(err)
    }
})

// delete recipe
router.delete('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id)
        await recipe.destroy()
        res.sendStatus(200)
    } catch(err) {
        next(err)
    }
})

// edit product; will want to add in isAdmin middleware, etc later
router.put('/:id', async (req, res, next) => {
    try {
        const recipe = await Recipe.findByPk(req.params.id, {include: [
            {model: Cuisine},
            {model: Restriction},
            {model: LineItem, include: {model: Ingredient}}
        ]})

        // very basic implementation so far; would only account for updating it's own field values
        // may want to consider cases for updating Cuisine, Restriction, etc as well later
        await recipe.update(req.body);
        res.send(recipe)
    } catch(err) {
        next(err)
    }
})

// create new recipe; would also want isAdmin middleware to only allow them to create recipes
router.post('/add-recipe', async (req, res, next) => {
    try {
        // writing under assumption that req.body will recieve object with {recipeDetails, cuisines, restrictions}
        // might need to also input ingredients with qtys; would need to find or create line items and ingredients if not already exist
        const recipe = await Recipe.create(req.body.recipeDetails)
        req.body.cuisines.forEach(async tag => {
            const cuisine = await Cuisine.findOne({where: {name: tag}})
            await recipe.addCuisine(cuisine)
        })
        req.body.restrictions.forEach(async tag => {
            const restriction = await Restriction.findOne({where: {name: tag}})
            await recipe.addRestriction(restriction)
        })
        const updated = await Recipe.findByPk(recipe.id);
        res.send(updated)
    } catch(err) {
        next(err)
    }
})

module.exports = router;