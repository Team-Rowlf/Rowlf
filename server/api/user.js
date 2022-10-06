const router = require('express').Router();
const { User } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

//USER ACCOUNT ROUTES
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userData = { username: username, password: password };
    let user = await User.authenticate(userData);
    res.send({ token: await user.generateToken() });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    const { firstName, lastName, gender, phoneNum, username, password, email } =
      req.body;
    const user = await User.create({
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      password,
      email,
    });
    res.send({ token: await user.generateToken() });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(error);
    }
  }
});

//user can view their own profile
router.get('/me', requireToken, async (req, res, next) => {
  try {
    const { id, firstName, lastName, gender, phoneNum, username, email } =
      req.user;
    const userInfo = {
      id,
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      email,
    };
    res.send(userInfo);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//user can edit their own profile
router.put('/editMe', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const { firstName, lastName, gender, phoneNum, username, password, email } =
      req.body;
    const updatedUser = await user.update({
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      password,
      email,
    });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

//checks to see if whatever input is passed into req.params exists
//req.body.value will be sent from the front end
router.post('/userExists/:input', async (req, res, next) => {
  try {
    const field = req.params.input;

    const user = await User.findOne({
      where: { [field]: req.body.value },
    });
    if (user) {
      res.send(false);
    } else {
      res.send(true);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//USER SHOPPINGLIST QUERIES

//gets back the shopping list of a user that is currently set to isComplete : false
router.get('/me/currentList', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const currentList = await user.getCurrentList();
    res.send(currentList);
  } catch (error) {
    next(error);
  }
});

//gets back a certain list of a user based on the params passed in (not sure if the implementation here is right)
router.get('/me/singleList', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const singleList = await user.getSingleList(req.body.id);
    res.send(singleList);
  } catch (error) {
    next(error);
  }
});

//gets back every list a user has had, completed or active
router.get('/me/allLists', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const allLists = await user.getAllLists();
    res.send(allLists);
  } catch (error) {
    next(error);
  }
});

//
router.put('/me/setCompleted/', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const listToSet = await user.setCompleted(req.body.id);
  } catch (error) {
    next(error);
  }
});

router.put('/me/setActive', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const listToSet = await user.setActive(req.body.id);
  } catch (error) {
    next(error);
  }
});

//USER RECIPE QUERIES

router.put('/me/addRecipe', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    //id will be of the recipe you want to add
    const recipeToAdd = await user.addRecipeToList(req.body.id);
    res.send(recipeToAdd);
  } catch (error) {
    next(error);
  }
});

router.put('/me/removeRecipe', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const recipteToRemove = await user.removeRecipeFromList(req.body.id);
    res.send(recipteToRemove);
  } catch (error) {
    next(error);
  }
});
//ADMIN ROUTES for users
//admin view all user accounts
router.get('/account', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'firstName',
        'lastName',
        'gender',
        'phoneNum',
        'username',
        'password',
        'email',
        'isAdmin',
      ],
    });
    res.send(users);
  } catch (error) {
    next(error);
  }
});

//admin view a single user account
router.get('/account/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//admin can create new user accounts
router.post('/account', requireToken, isAdmin, async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      password,
      email,
      isAdmin,
    } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      password,
      email,
      isAdmin,
    });
    res.send(user);
  } catch (error) {
    //general check to see if username/email already exists
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(error);
    }
  }
});

//admin can edit existing user accounts
router.put('/account/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    //gave admins the ability to set other admins
    const {
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      password,
      email,
      isAdmin,
    } = req.body;
    const userToUpdate = await User.findByPk(req.params.id);
    const editedUser = await userToUpdate.update({
      firstName,
      lastName,
      gender,
      phoneNum,
      username,
      password,
      email,
      isAdmin,
    });
    res.send(editedUser);
  } catch (error) {
    next(error);
  }
});

//admin can remove user accounts
router.delete('/account/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.destroy();
    res.send(userToDelete);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
