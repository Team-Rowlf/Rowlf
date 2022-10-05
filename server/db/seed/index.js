const db = require('../db')
const users = require('./userSeed')
const User = require('../models/User')
const cuisines = require('./cuisineSeed')
const Cuisine = require('../models/Cuisine')
const restrictions = require('./restrictionSeed')
const Restriction = require('../models/Restriction')
const appliances = require('./applianceSeed')
const Appliance = require('../models/Appliance')
const ingredients = require('./ingredientSeed')
const Ingredient = require('../models/Ingredient')
const recipes = require('./recipeSeed')
const Recipe = require('../models/Recipe')
const LineItem = require('../models/LineItem')

const seed = async () => {
    // seed some stuff here;
    await db.sync({ force: true });
    await Promise.all(users.map((user) => User.create(user)))
    await Promise.all(cuisines.map((cuisine) => Cuisine.create({name: cuisine})))
    await Promise.all(restrictions.map((restriction) => Restriction.create({name: restriction})))
    await Promise.all(appliances.map((appliance) => Appliance.create({name: appliance})))
    await Promise.all(ingredients.map((ingredient) => Ingredient.create(ingredient)))
    await Promise.all(recipes.map(async (recipe) => {
        const newRecipe = await Recipe.create({name: recipe.name, url: recipe.url, servings: recipe.servings, cookTime: recipe.cookTime})
        recipe.ingredients.forEach(async (ingredient) => {
            let ingredientModel = Ingredient.findOne({where: {name: ingredient.name}})
            await LineItem.create({ingredientId: ingredientModel.id, recipeId: newRecipe.id, qty: ingredient.qty, measurement: ingredient.denom})
        })
        recipe.cuisine.forEach(async (cuisine) => {
            let cuisineModel = await Cuisine.findOne({where: {name: cuisine}})
            await newRecipe.addCuisine(cuisineModel)
        })
        recipe.restrictions.forEach(async (tag) => {
            let restriction = await Restriction.findOne({where: {name: tag}})
            await newRecipe.addRestriction(restriction)
        })
        recipe.appliances.forEach(async (tag) => {
            let appliance = await Appliance.findOne({where: {name: tag}})
            await newRecipe.addAppliance(appliance)
        })
    }))
    console.log('Seeding complete!')
}

module.exports = seed;