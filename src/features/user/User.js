import React from 'react';
import { Outlet, Link } from 'react-router-dom';
const User = () => {
	return (
		<div className="user">
			<nav className="nav-user">
				<Link to="shoppingList"> shoppingList </Link>
				<Link to="profile"> profile</Link>
				<Link to="purchased/wishlist"> purchased/wishlist </Link>
				<Link to="recipes"> recipes </Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default User;
