const router = require('express').Router();
const {_addIngredientToArray, _convertMeasurementFormat, _addRecipeToArray, _addRecipesToArray } =  require('./helperFunctions')

router.post('/convertshoppinglist', async (req, res, next) => {
    try {
        const ingredientArray =  []
        _addRecipesToArray(req.body, ingredientArray)
        res.send({ingredients: ingredientArray})
    } catch(err) {
        next(err)
    }
})

module.exports = router;