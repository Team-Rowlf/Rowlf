const router = require('express').Router();
const { User } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

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
    const { username, password, email } = req.body;
    const user = await User.create({ username, password, email });
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
    const { id, username, email } = req.user;
    const userInfo = { id, username, email };
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
    const { username, email, password } = req.body;
    const updatedUser = await user.update({ username, email, password });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

//ADMIN ROUTES for users
//admin view all user accounts
router.get('/account', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['username', 'email', 'isAdmin'],
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
    const { username, email, password, isAdmin } = req.body;
    const user = await User.create({ username, email, password, isAdmin });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

//admin can edit existing user accounts
router.put('/account/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    //gave admins the ability to set other admins
    const { username, email, password, isAdmin } = req.body;
    const userToUpdate = await User.findByPk(req.params.id);
    const editedUser = await userToUpdate.update({
      username,
      email,
      password,
      isAdmin,
    });
    res.send(editedUser);
  } catch (error) {
    next(error);
  }
});

//admin can remove user accounts
router.delete('/account/:id', async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    await userToDelete.destroy();
    res.send(userToDelete);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
