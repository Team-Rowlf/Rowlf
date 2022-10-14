import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../general/Nav.jsx';
import { fetchRecipes } from '../../features/recipes/recipesSlice';
import { fetchUser, getUserToken } from '../../features/user/userSlice.js';
import {
	getUserDisLikes,
	getUserLikes,
} from '../../features/profile/profileSlice.js';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const User = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (!user.isLogged && !token) {
			navigate('/')
		}
	},[user.isLogged])

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (token) {
			dispatch(fetchUser());
			dispatch(fetchRecipes());
			dispatch(getUserLikes({ token }));
			dispatch(getUserDisLikes({ token }));
		} else {
			navigate('/')
		}
	}, []);

	return (
		<div className="user">
			<Nav />
			<Outlet />
		</div>
	);
};

export default User;
