const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const ShoppingList = require('./ShoppingList');
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
require('dotenv').config();

const SALT_ROUNDS = 10;

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  phoneNum: {
    type: Sequelize.STRING,
  },
  gender: {
    type: Sequelize.ENUM('male', 'female', 'prefer not to say', 'other'),
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

//authentication class/instance methods

//creates token for the user instance
User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

//checks the passed in credentials, will return the user if credentials are valid
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({
    where: {
      username,
    },
  });
  console.log(await bcrypt.compare(password, user.password));
  //if the user or the comparison between hashed and passed in password is falsey
  if (!user || !(await bcrypt.compare(password, user.password))) {
    const error = Error('Incorrect username or password');
    error.status = 401;
    throw error;
  }
  return user;
};

//searches for user by passed in token (will return the user if they exist)
User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (!user) {
      const error = Error('User does not exist');
      throw error;
    }
    return user;
  } catch (err) {
    const error = Error('bad token');
    error.status = 401;
    throw error;
  }
};

//hooks to hash password whenever a new user has been created/existing user has been updated
User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.password = hashedPassword;
});

User.beforeUpdate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS);
  user.password = hashedPassword;
});

//custom user model instance methods (for querying)
User.prototype.getCurrentList = async function () {
  const currentList = await ShoppingList.findOne({
    where: {
      userId: this.id,
      isCompleted: false,
      attributes: ['id', 'userId'],
      //shoppingLisy links to recipe
      include: {
        model: Recipe,
        attributes: ['name', 'servings'],
        //recipe links to lineItem, which then links to ingredient
        include: {
          model: LineItem,
          attributes: ['qty', 'measurement'],
          include: { model: Ingredient, attributes: ['name', 'isSpice'] },
        },
      },
    },
  });
  return currentList;
};

User.prototype.getSingleList = async function (id) {
  const currentList = await ShoppingList.findByPk(id, {
    where: {
      userId: this.id,
      attributes: ['id', 'userId'],
      include: {
        model: Recipe,
        attributes: ['name', 'servings'],
        include: {
          model: LineItem,
          attributes: ['qty', 'measurement'],
          include: { model: Ingredient, attributes: ['name', 'isSpice'] },
        },
      },
    },
  });
  return currentList;
};

User.prototype.getAllLists = async function () {
  const currentList = await ShoppingList.findAll({
    where: {
      userId: this.id,
      attributes: ['id', 'userId'],
      include: {
        model: Recipe,
        attributes: ['name', 'servings'],
        include: {
          model: LineItem,
          attributes: ['qty', 'measurement'],
          include: { model: Ingredient, attributes: ['name', 'isSpice'] },
        },
      },
    },
  });
  return currentList;
};

User.prototype.setCompleted = async function (id) {
  let listToSet = await ShoppingList.findOne({
    where: {
      id: id,
      userId: this.id,
    },
  });
  await listToSet.update({ isCompleted: true });
};

User.prototype.setActive = async function (id) {
  let listToSet = await ShoppingList.findOne({
    where: {
      id: id,
      userId: this.id,
    },
  });
  await listToSet.update({ isCompleted: false });
};

User.prototype.addRecipeToList = async function (id) {
  let recipeToAdd = await Recipe.findByPk(id);
  let userShoppingList = await this.getCurrentList();
  await userShoppingList.addRecipe(recipeToAdd);
};

User.prototype.removeRecipeFromList = async function (id) {
  let recipeToAdd = await Recipe.findByPk(id);
  let userShoppingList = await this.getCurrentList();
  await userShoppingList.removeRecipe(recipeToAdd);
};

//methods for user to favorite/unfavorite and dislike/un-dislike recipes
//might want some other checks to make sure a recipe can't be in both favorites and dislikes
User.prototype.addRecipeToFavorites = async function (recipeId) {
  const recipe = await Recipe.findByPk(recipeId);
  if (recipe !== null) {
    await this.addFavorite(recipe);
  }
};

User.prototype.removeRecipeFromFavorites = async function (recipeId) {
  const recipe = await Recipe.findByPk(recipeId);
  if (recipe !== null) {
    await this.removeFavorite(recipe);
  }
};

User.prototype.addRecipeToDislikes = async function (recipeId) {
  const recipe = await Recipe.findByPk(recipeId);
  if (recipe !== null) {
    await this.addDislike(recipe);
  }
};

User.prototype.removeRecipeFromDislikes = async function (recipeId) {
  const recipe = await Recipe.findByPk(recipeId);
  if (recipe !== null) {
    await this.removeDislike(recipe);
  }
};

User.prototype.addIngredientToOwned = async function (ingredientId) {
  const ingredient = await Ingredient.findByPk(ingredientId);
  if (ingredient !== null) {
    await this.addOwnedIngredient(ingredient);
  }
};

User.prototype.removeIngredientFromOwned = async function (ingredientId) {
  const ingredient = await Ingredient.findByPk(ingredientId);
  if (ingredient !== null) {
    await this.removeOwnedIngredient(ingredient);
  }
};

User.prototype.getFavorites = async function () {
  //might be better way of doing this
  const selfWithRecipes = await User.findByPk(this.id, {
    include: {
      model: Recipe,
      as: 'favorite',
    },
  });
  return selfWithRecipes.favorite;
};

User.prototype.getDislikes = async function () {
  const selfWithRecipes = await User.findByPk(this.id, {
    include: {
      model: Recipe,
      as: 'dislike',
    },
  });
  return selfWithRecipes.dislike;
};

User.prototype.getOwnedIngredients = async function () {
  const selfWithIngredients = await User.findByPk(this.id, {
    include: {
      model: Ingredient,
      as: 'ownedIngredient',
    },
  });
  return selfWithIngredients.ownedIngredient;
};

module.exports = User;
