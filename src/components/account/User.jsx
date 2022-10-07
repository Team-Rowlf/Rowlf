import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../general/Nav.jsx';
import { fetchRecipes } from '../../features/recipes/recipesSlice';
const User = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	React.useEffect(() => {
		!user.isLogged && navigate('/');
	}, [user]);

	React.useEffect(() => {
		dispatch(fetchRecipes());
	}, []);

	return (
		<div className="user">
			<Nav />
			<Outlet />
		</div>
	);
};

export default User;
