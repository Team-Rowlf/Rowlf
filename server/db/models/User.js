const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { ShoppingList } = require('./ShoppingList');
require('dotenv').config();

const SALT_ROUNDS = 10;

const User = db.define('user', {
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

User.prototype.getCurrentList = async function () {
  const currentList = await ShoppingList.findOne({
    where: {
      userId: this.id,
      isCompleted: false,
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

  User.prototype.getAllLists = async function () {
    const currentList = await ShoppingList.findOne({
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
};

User.prototype.setCompleted = async function (id){
  let listToSet = await ShoppingList.findOne({
    where: {
      id: id,
      userId: this.id
    }    
  })
  list
}



User.prototype.addRecipeToList() = async function () {

}

module.exports = User;
