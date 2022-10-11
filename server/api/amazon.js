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
    } else if ((measurement === 'clove') || (measurement === 'cloves')) {
        return 'CLOVES'
    } else if ((measurement === 'pinches') || (measurement === 'pinch') || (measurement === 'to taste')) {
        return 'PINCHES'
    } else if ((measurement === 'stalk') || (measurement === 'stalks')) {
        return 'STALKS'
    }
    else {
        return 'COUNT' // catchall for now
    }
} 

// funny to note: pie crust for chicken pot pie recipe populates as oreo pie crust on amazon; could be something to show in video
// demonstrate that users should validate their cart items before adding to cart/purchasing
const testingFunction = async () => {
    await db.sync();
    let testRecipe = await Recipe.findByPk(11, {
        include: [
            { model: LineItem, include: { model: Ingredient } },
          ]
    });
    let ingredientArray = [];
    for (index in testRecipe.lineItems) {
        _addIngredientToArray(testRecipe.lineItems[index], ingredientArray)
    }
    let ingredientJSON = JSON.stringify({ingredients: ingredientArray})
    console.log(ingredientJSON)
    return ingredientJSON
}

testingFunction()