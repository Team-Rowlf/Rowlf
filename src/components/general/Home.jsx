import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { fetchUser } from '../../features/user/userSlice.js';
import Login from '../account/Login.jsx';

const Home = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	React.useEffect(() => {
		(user.isLogged &&
			user.isAdmin &&
			navigate(`/admin/${user.userInfo.name}`)) ||
			(user.isLogged && navigate('/user/shoppingList'));
	}, [user.isLogged]);

	React.useEffect(() => {
		localStorage.getItem('token') && dispatch(fetchUser());
	}, []);
	return <Login />;
};

export default Home;
