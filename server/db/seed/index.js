const db = require('../db');
const users = require('./userSeed');
const User = require('../models/User');
const cuisines = require('./cuisineSeed');
const Cuisine = require('../models/Cuisine');
const restrictions = require('./restrictionSeed');
const Restriction = require('../models/Restriction');
const appliances = require('./applianceSeed');
const Appliance = require('../models/Appliance');
const ingredients = require('./ingredientSeed');
const Ingredient = require('../models/Ingredient');

const seed = async () => {
  // seed some stuff here;
  await db.sync({ force: true });
  await Promise.all(users.map((user) => User.create(user)));
  await Promise.all(
    cuisines.map((cuisine) => Cuisine.create({ name: cuisine }))
  );
  await Promise.all(
    restrictions.map((restriction) => Restriction.create({ name: restriction }))
  );
  await Promise.all(
    appliances.map((appliance) => Appliance.create({ name: appliance }))
  );
  await Promise.all(
    ingredients.map((ingredient) => Ingredient.create(ingredient))
  );
};

seed();
module.exports = seed;
