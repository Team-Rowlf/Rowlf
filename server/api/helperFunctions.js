const sequelize = require('sequelize');

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
    const lowerCase = measurement.toLowerCase();
    if (lowerCase.includes('lb') || lowerCase.includes('pound')) {
        return 'POUNDS'
    } else if (lowerCase.includes('cup')) {
        return 'CUPS'
    } else if (lowerCase.includes('tsp') || lowerCase.includes('teaspoon')) {
        return 'TSP'
    } else if (lowerCase.includes('tbsp') || lowerCase.includes('tablespoon')) {
        return 'TBSP'
    } else if (lowerCase.includes('oz') || lowerCase.includes('ounce')) {
        return 'OUNCES'
    } else if (lowerCase.includes('clove')) {
        return 'CLOVES'
    } else if (lowerCase.includes('pinch') || (lowerCase === 'to taste')) {
        return 'PINCHES'
    } else if (lowerCase.includes('stalk')) {
        return 'STALKS'
    } else if (lowerCase.includes('bunch')) {
        return 'BUNCHES'
    } else if ((lowerCase === 'leaf') || (lowerCase === 'leaves')) {
        return 'LEAVES'
    } else if (lowerCase.includes('slice')) {
        return 'SLICES'
    } else if (lowerCase.includes('can')) {
        return 'JP_CANS' // unsure what this means; doesn't seem to be accurate; may want to update seed file with oz instead of cans
    } else if (lowerCase.includes('pint')) {
        return 'PINTS'
    } else if (lowerCase.includes('quart')) {
        return 'QUARTS'
    } else if (lowerCase.includes('gallon')) {
        return 'GALLONS'
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

const addRecipesToArray = (recipeArray, array) => {
    for (index in recipeArray) {
        _addRecipeToArray(recipeArray[index], array)
    }
}

module.exports = {
	addRecipesToArray
};
