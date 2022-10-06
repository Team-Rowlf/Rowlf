import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav from '../general/Nav.jsx';
const User = () => {
	return (
		<>
			<Nav/>
			<div className="user">
				<nav className="nav-user">
					<Link to="shoppingList"> shoppingList </Link>
					<Link to="profile"> profile</Link>
					<Link to="purchased/wishlist"> purchased/wishlist </Link>
					<Link to="recipes"> recipes </Link>
				</nav>
				<Outlet />
			</div>
		</>
	);
};

export default User;
