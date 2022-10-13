import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { fetchUser } from '../../features/user/userSlice.js';
import Login from '../account/Login.jsx';
import Signup from '../account/Signup.jsx';

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	useEffect(() => {
		(user.isLogged &&
			user.isAdmin &&
			navigate(`/admin/${user.userInfo.name}`)) ||
			(user.isLogged && navigate('/user/shoppingList'));
	}, [user.isLogged]);

	useEffect(() => {
		if (
			localStorage.getItem('token') &&
			localStorage.getItem('token') !== 'undefined' &&
			'null'
		) {
			dispatch(fetchUser());
		}
	}, []);
	return <Login />;
};

export default Home;
