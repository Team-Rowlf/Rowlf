const router = require('express').Router();

router.post('/convertshoppinglist', async (req, res, next) => {
    try {
        const ingredientArray =  []
        _addRecipesToArray(req.body, ingredientArray)
        res.send({ingredients: ingredientArray})
    } catch(err) {
        next(err)
    }
})

const _addIngredientToArray = (lineItem, array) => {
    const ingredientObj = {
        name: lineItem.ingredient.name,
        quantityList: [{
            unit: _convertMeasurementFormat(lineItem.measurement),
            amount: lineItem.qty 
        }]
    }
    array.push(ingredientObj)
    return array
}

const _convertMeasurementFormat = (measurement) => {
    if (measurement === 'lb') {
        return 'POUNDS'
    } else if (measurement === 'cup') {
        return 'CUPS'
    } else if (measurement === 'tsp') {
        return 'TSP'
    } else if (measurement === 'tbsp') {
        return 'TBSP'
    } else if (measurement === 'oz') {
        return 'OUNCES'
    } else if (measurement.includes('clove')) {
        return 'CLOVES'
    } else if (measurement.includes('pinch') || (measurement === 'to taste')) {
        return 'PINCHES'
    } else if (measurement.includes('stalk')) {
        return 'STALKS'
    } else if (measurement.includes('bunch')) {
        return 'BUNCHES'
    } else if ((measurement === 'leaf') || (measurement === 'leaves')) {
        return 'LEAVES'
    } else if (measurement.includes('slice')) {
        return 'SLICES'
    } else if (measurement.includes('can')) {
        return 'JP_CANS' // unsure what this means; doesn't seem to be accurate; may want to update seed file with oz instead of cans
    }
    else {
        return 'COUNT' // catchall for now
    }
} 

const _addRecipeToArray = (recipe, array) => {
    for (index in recipe.lineItems) {
        _addIngredientToArray(recipe.lineItems[index],array)
    }
}

const _addRecipesToArray = (recipeArray, array) => {
    for (index in recipeArray) {
        _addRecipeToArray(recipeArray[index], array)
    }
}

module.exports = router;