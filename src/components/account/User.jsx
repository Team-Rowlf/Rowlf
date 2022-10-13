import React from 'react';
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

	React.useEffect(() => {
		!user.isLogged && navigate('/');
	}, [user]);

	React.useEffect(() => {
		if (token) {
			dispatch(fetchRecipes());
			dispatch(getUserLikes({ token }));
			dispatch(getUserDisLikes({ token }));
			toast.success('🎉 Success 🎉!', {
				position: 'bottom-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
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
