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

module.exports = router;
