const db = require('./db');
const User = require('./models/User');
const Cuisine = require('./models/Cuisine');
const Ingredient = require('./models/Ingredient');
const Recipe = require('./models/Recipe');
const Restriction = require('./models/Restriction');
const ShoppingList = require('./models/ShoppingList');
const Appliance = require('./models/Appliance');
const LineItem = require('./models/LineItem');
const UserSuggestion = require('./models/UserSuggestion');
const seedFunc = require('./seed');

User.hasMany(ShoppingList);
ShoppingList.belongsTo(User);

User.belongsToMany(Recipe, { through: 'FavoritedRecipes', as: 'favorite' });
User.belongsToMany(Recipe, { through: 'DislikedRecipes', as: 'dislike' });
User.belongsToMany(Ingredient, {
  through: 'UserOwnedIngredients',
  as: 'ownedIngredient',
});

User.hasMany(UserSuggestion);
UserSuggestion.belongsTo(User);

Recipe.belongsToMany(Cuisine, { through: 'CuisineType' });
Cuisine.belongsToMany(Recipe, { through: 'CuisineType' });

LineItem.belongsTo(Ingredient);
Recipe.hasMany(LineItem);

ShoppingList.belongsToMany(Recipe, { through: 'ShoppingListRecipe' });
Recipe.belongsToMany(ShoppingList, { through: 'ShoppingListRecipe' });

Recipe.belongsToMany(Appliance, { through: 'CookingMethod' });
Appliance.belongsToMany(Recipe, { through: 'CookingMethod' });

Recipe.belongsToMany(Restriction, { through: 'DietaryRestriction' });
Restriction.belongsToMany(Recipe, { through: 'DietaryRestriction' });

module.exports = {
  db,
  User,
  Recipe,
  Ingredient,
  ShoppingList,
  Cuisine,
  Restriction,
  Appliance,
  LineItem,
  UserSuggestion,
  seedFunc,
};
