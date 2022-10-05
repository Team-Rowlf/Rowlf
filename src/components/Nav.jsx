import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
	return (
		<div className="nav-container">
			<div className="img-nav-container">
				<img className="img-nav" src="/largelogo.svg" alt="" />
			</div>
			<nav className="nav-bar">
				<Link className="nav-link" to="/">
					Home{' '}
				</Link>
				<Link className="nav-link" to="/about">
					About
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
