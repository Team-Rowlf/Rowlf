const router = require('express').Router();
const { ShoppingList, User, LineItem, Ingredient, Recipe } = require('../db');
const { requireToken } = require('./gatekeepingMiddleware');

//get a list of all the user's shopping lists (not sure if this query is correct)
router.get('/', requireToken, async (req, res, next) => {
  try {
    const shoppingLists = await ShoppingList.findAll(
      {
        //get the logged in user id
        where: {
          userId: req.user.id,
          attributes: ['id', 'userId'],
          //shoppingLisy links to recipe
          include: {
            model: Recipe,
            attributes: ['name', 'servings'],
            //recipe links to lineItem, which then links to ingredient
            include: {
              model: LineItem,
              attributes: [''],
              include: { model: Ingredient },
            },
          },
        },
      }
      //we need the ingridients at the end (since that's what the user is searching for)
      //shopping lists have a recipe
      //recipes have a link to line items which have both a recipeid and an ingridientid
      //so find where the lineItem's recipeId equals the recipe.id
      //then use that to find the line item where
    );
  } catch (error) {
    next(error);
  }
});

//want to just grab one shopping list
router.get('/', async (req, res, next) => {});

module.exports = router;
