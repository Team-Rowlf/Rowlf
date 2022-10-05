import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
	return (
		<div className="nav-container">
			<nav className="nav-bar">
				<Link className="nav-link" to="/">
					Home{' '}
				</Link>
				<Link className="nav-link" to="/about">
					About
				</Link>
				<Link className="nav-link" to="/recipes">
					Recipes
				</Link>
				<Link className="nav-link" to="/cart">
					Cart
				</Link>
				<Link className="nav-link" to="/profile">
					Profile
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
