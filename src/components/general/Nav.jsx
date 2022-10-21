import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { button, Link, useNavigate } from 'react-router-dom';
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
	const [isNavExpanded, setIsNavExpanded] = useState(false)

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
		<div className='nav'>
			<div className="nav-title">
				<Link to={user.isLogged ? '/user/shoppingList' : '/'}>
					<img className="small-logo" src="/favicon.svg" alt="Logo" />
				</Link>
				<h1>Hello Kitchen</h1>
			</div>
			<nav className="navigation">
			{isNavExpanded ? <></> :
			<button
				className="hamburger"
				onClick={() => {
				setIsNavExpanded(!isNavExpanded)
				}}
			>
				<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				viewBox="0 0 20 20"
				fill="#E0E2DB"
				>
				<path
					fillRule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
					clipRule="evenodd"
				/>
				</svg>
			</button>
			}
			<div
			className={
				isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
			}
			>
			<ul>
				{isAdmin ? (
					<li>			
					<Link
						to='/admin'
						onClick={() => {
							setIsNavExpanded(!isNavExpanded)
						}}
						>
						Admin
					</Link>
					</li>
				) : (
					<></>
				)}
				<li>
				<Link
					to='/user/shoppinglist'
					onClick={() => {
					setIsNavExpanded(!isNavExpanded)
					}}
				>
					Home
				</Link>
				</li>
				<li>
				<Link
					to='/user/recipes?page=1'
					onClick={() => {
					setIsNavExpanded(!isNavExpanded)
					}}
				>
					Recipes
				</Link>
				</li>
				<li>
				<Link
					to='/user/profile'
					onClick={() => {
					setIsNavExpanded(!isNavExpanded)
					}}
				>
					Profile
				</Link>
				</li>
				<li>
				<Link
					to='/'
					onClick={() => {
						setIsNavExpanded(!isNavExpanded)
						handleLogout();
					}}
				>
					Logout
				</Link>
				</li>
			</ul>
			</div>
			</nav>
				
		</div>
	)
}

export default Nav;
