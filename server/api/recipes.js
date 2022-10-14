const router = require('express').Router();
const { Recipe, Cuisine, Restriction, LineItem, Ingredient } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

// get all recipes
router.get('/', async (req, res, next) => {
  try {
    if (req.query.page) {
      // this statement being used in admin portal
      const cuisineObj = { model: Cuisine };
      const restrictionObj = { model: Restriction };
      const activeObj = {};
      let orderArr = ['id', 'asc'];
      if (req.query.cuisine !== 'all') {
        cuisineObj.where = { name: [req.query.cuisine] };
      }
      if (req.query.restriction !== 'all') {
        restrictionObj.where = { name: [req.query.restriction] };
      }
      if (req.query.active) {
        activeObj.isActive = (req.query.active === 'yes' ? true : false)
      }
      const { rows, count } = await Recipe.findAndCountAll({
        distinct: true,
        where: activeObj,
        order: [orderArr],
        offset: (req.query.page - 1) * 25,
        limit: 25,
        include: [
          cuisineObj,
          restrictionObj,
          { model: LineItem, include: { model: Ingredient } },
        ],
      });
      res.send({ rows, count });
    } else if (req.query.cuisine || req.query.restriction) {
      const cuisineObj = { model: Cuisine };
      const restrictionObj = { model: Restriction };
      let orderArr = ['id', 'asc']; // default order by recipe id
      if (req.query.cuisine !== 'all') {
        cuisineObj.where = { name: [req.query.cuisine] };
      }
      if (req.query.restriction !== 'all') {
        restrictionObj.where = { name: [req.query.restriction] };
      }
      if (req.query.sort) {
        orderArr =
          req.query.sort === 'ascending'
            ? ['servings', 'asc']
            : ['servings', 'desc'];
      }
      const { rows, count } = await Recipe.findAndCountAll({
        distinct: true,
        where: {isActive: true},
        order: [orderArr],
        include: [
          cuisineObj,
          restrictionObj,
          { model: LineItem, include: { model: Ingredient } },
        ],
      });
      res.send({ rows, count });
    } else {
      const { rows, count } = await Recipe.findAndCountAll({
        where: {isActive: true},
        include: [
          { model: Cuisine },
          { model: Restriction },
          { model: LineItem, include: { model: Ingredient } },
        ],
      });
      res.send({ rows, count });
    }
  } catch (err) {
    next(err);
  }
});

// get single recipe
router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [
        { model: Cuisine },
        { model: Restriction },
        { model: LineItem, include: { model: Ingredient } },
      ],
    });
    res.send(recipe);
  } catch (err) {
    next(err);
  }
});

//ADMIN ROUTES
// delete recipe; won't use this route after all, will just change isActive to false
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    await recipe.destroy();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// edit product; will want to add in isAdmin middleware, etc later
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [
        { model: Cuisine },
        { model: Restriction },
        { model: LineItem, include: { model: Ingredient } },
      ],
    });

    console.log('LOGGING REQ.BODY',req.body)

    // very basic implementation so far; would only account for updating it's own field values
    // may want to consider cases for updating Cuisine, Restriction, etc as well later
    await recipe.update(req.body.recipeDetails);
    console.log('LOGGING RECIPE IN API ROUTE',recipe)
    res.send(recipe);
  } catch (err) {
    next(err);
  }
});

// create new recipe; would also want isAdmin middleware to only allow them to create recipes
router.post('/add-recipe', requireToken, isAdmin, async (req, res, next) => {
  try {
    const recipe = await Recipe.create(req.body.recipeDetails);
    req.body.cuisines.forEach(async (tag) => {
      const cuisine = await Cuisine.findOne({ where: { name: tag } });
      await recipe.addCuisine(cuisine);
    });
    req.body.restrictions.forEach(async (tag) => {
      const restriction = await Restriction.findOne({ where: { name: tag } });
      await recipe.addRestriction(restriction);
    });
    req.body.ingredients.forEach(async (item) => {
      const [ingredient, created] = await Ingredient.findOrCreate({where: {name: item.name}})
      const lineItem = await LineItem.create({
        qty: Number(item.qty),
        measurement: item.measurement,
        ingredientId: ingredient.id,
        recipeId: recipe.id
      })
    });
    // may want to include cuisine, restrictions, lineItems? guess not necessary though
    const updated = await Recipe.findByPk(recipe.id);
    res.send(updated);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
