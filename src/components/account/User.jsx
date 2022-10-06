import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const User = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	React.useEffect(() => {
		!user.isLogged && navigate('/');
	}, [user]);
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
