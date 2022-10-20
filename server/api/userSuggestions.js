const router = require('express').Router();
const { User, UserSuggestion } = require('../db');
const { requireToken, isAdmin } = require('./gatekeepingMiddleware');

//admins can view all suggestions made that (addded 'admin' to avoid hitting above routes)
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const userSuggestions = await UserSuggestion.findAll({
      include: {
        model: User,
        attributes: ['username'],
      },
    });
    res.send(userSuggestions);
  } catch (err) {
    next(err);
  }
});

router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const userSuggestions = await UserSuggestion.findAll({
      include: {
        model: User,
        attributes: ['username'],
      },
    });
    res.send(userSuggestions);
  } catch (err) {
    next(err);
  }
});

router.get('/me', requireToken, async (req, res, next) => {
  try {
    const userSuggestions = await UserSuggestion.findAll({
      where: {
        userId: req.user.id,
      },
    });
    res.send(userSuggestions);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const userSuggestion = await UserSuggestion.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ['username'],
      },
    });
    res.send(userSuggestion);
  } catch (err) {
    next(err);
  }
});

//also provided route for only viewing suggestions that have not been dealt with yet
router.get('/pending', requireToken, isAdmin, async (req, res, next) => {
  try {
    const userSuggestions = await UserSuggestion.findAll({
      where: {
        status: pending,
      },
    });
    res.send(userSuggestions);
  } catch (err) {
    next(err);
  }
});

//admin can edit the suggestions to mark as complete and/or add a response
router.put('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const userSuggestion = await UserSuggestion.findByPk(req.params.id);
    const { status, adminResponse } = req.body;
    if (!adminResponse || adminResponse === 'N/A') {
      const error = new Error('Please provide a response for the user');
      throw error;
    }
    if (!status) {
      const error = new Error('Please set a status');
      throw error;
    }

    const updatedSuggestion = await userSuggestion.update({
      status,
      adminResponse,
    });
    res.send(updatedSuggestion);
  } catch (err) {
    console.log('here');
    next(err);
  }
});

//admin can remove a suggested recipe
router.delete('/:id', requireToken, isAdmin, async (req, res, next) => {
  try {
    const suggestionToDelete = await UserSuggestion.findByPk(req.params.id);
    await suggestionToDelete.destroy();
    res.send(suggestionToDelete);
  } catch (err) {
    next(err);
  }
});

//user can suggest recipes, will be added to seperate userSuggestion table
router.post('/', requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    const { url } = req.body;
    let suggestion = await user.suggestRecipe(url);
    res.send(suggestion);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
