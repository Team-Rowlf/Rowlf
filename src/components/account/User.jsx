import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../general/Nav.jsx';
import { fetchRecipes } from '../../features/recipes/recipesSlice';
import { getUserToken } from '../../features/user/userSlice.js';
import {
	getUserDisLikes,
	getUserLikes,
} from '../../features/profile/profileSlice.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const User = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const token = useSelector(getUserToken);

	const user = useSelector((state) => state.user);

	useEffect(() => {
		!user.isLogged && navigate('/');
	}, [user]);

	useEffect(() => {
		if (token) {
			dispatch(fetchRecipes());
			dispatch(getUserLikes({ token }));
			dispatch(getUserDisLikes({ token }));
		}
	}, []);

	return (
		<div className="user">
			<Nav />
			<ToastContainer limit={1} />
			<Outlet />
		</div>
	);
};

export default User;
