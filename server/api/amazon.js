const router = require('express').Router();
const { Recipe, ShoppingList, LineItem, Ingredient, db } = require('../db');
// get rid of db import later; just importing now for testing purposes



// first goal: write a helper method that takes in shopping list
// - want to return a properly formatted JSON object
// - to start, try just turning a single LineItem into JSON
// - -- after that, can do a full recipe, and after that, can try to do a whole shopping list
// - goal for today at least is be able to copy/paste return value into the verify site to see if it works
// - after that, can try to play around with posting to the other site, even without a tag; might work without it based on documentation?

const _addIngredientToArray = (lineItem, array) => {
    // console.log('logging lineItem in helper function', lineItem)
    const ingredientObj = {
        name: lineItem.ingredient.name,
        // will likely want to build out some more robust methods for unit/amount (ex: for the 1 'to taste' stuff I put in; cant to like tablespoon or something; also change abrevs to full name capitalized?)
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

// would pass ShoppingList.recipes to this method
const _addRecipesToArray = (recipeArray, array) => {
    for (index in recipeArray) {
        _addRecipeToArray(recipeArray[index], array)
    }
}

// funny to note: pie crust for chicken pot pie recipe populates as oreo pie crust on amazon; could be something to show in video
// demonstrate that users should validate their cart items before adding to cart/purchasing
const testingFunction = async () => {
    await db.sync();
    const recipeArray = []
    for (let i =97 ; i < 101; i++) {
        // let randIndex= Math.floor(Math.random()*100)
        let testRecipe = await Recipe.findByPk(i, {
            include: [
                { model: LineItem, include: { model: Ingredient } },
              ]
        });
        recipeArray.push(testRecipe)
    }
    // console.log(recipeArray)
    let ingredientArray = [];
    _addRecipesToArray(recipeArray, ingredientArray)
    let ingredientJSON = JSON.stringify({ingredients: ingredientArray})
    console.log(ingredientJSON)
    return ingredientJSON
}

// should note that later, will want to somehow exclude marked off items? or leave it to the user to do so...
// -- may require some sort of refactor, or need to have some sort of consolidation method on shopping list page

testingFunction()

// copy/pasting console.log results here to test out for now:
// https://www.amazon.com/afx/ingredients/verify

// looking at documentation, may not even need an api route... will play around
// if no api route needed, then may want to move helper file to front end component or something