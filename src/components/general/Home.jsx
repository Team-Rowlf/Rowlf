import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import Login from '../account/Login.jsx';
import Signup from '../account/Signup.jsx';
import { fetchUser } from '../../features/user/userSlice.js';

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	React.useEffect(() => {
		(user.isLogged &&
			user.isAdmin &&
			navigate(`/admin/${user.userInfo.name}`)) ||
			(user.isLogged && navigate('/user/shoppingList'));
	}, [user.isLogged]);

	React.useEffect(() => {
		// dispatch(fetchUser());
	}, []);
	return <Login />;
};

export default Home;
