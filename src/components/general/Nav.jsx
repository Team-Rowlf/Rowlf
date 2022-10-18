import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { button, useNavigate } from 'react-router-dom';
import { clearAllUsersState } from '../../features/admin/adminSlice';
import { resetProfile } from '../../features/profile/profileSlice';
import { resetRecipes } from '../../features/recipes/recipesSlice';
import { resetShoppingList } from '../../features/shoppingList/shoppingListSlice';
import { logout } from '../../features/user/userSlice';

const Nav = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		if (user.isAdmin) {
			setIsAdmin(true);
		}
	}, [user.isAdmin]);
	const handleLogout = () => {
		dispatch(logout());
		dispatch(clearAllUsersState());
		dispatch(resetProfile());
		dispatch(resetRecipes());
		dispatch(resetShoppingList());
		navigate('/');
	};
	return (
		<div className="nav">
			<div className="nav-title">
				<a href="/">
					<img className="small-logo" src="/favicon.svg" alt="Logo" />
				</a>
				<h1>Hello Kitchen</h1>
			</div>
			<nav className="nav-bar">
				{isAdmin ? (
					<button className="navbutton" onClick={() => navigate('/admin')}>
						Admin
					</button>
				) : (
					<></>
				)}
				<button className="navbutton" onClick={() => navigate('/user/profile')}>
					Profile
				</button>
				<button
					className="navbutton"
					onClick={() => navigate('/user/recipes?page=1')}
				>
					Recipes
				</button>
				<button className="navbutton" onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Nav;
