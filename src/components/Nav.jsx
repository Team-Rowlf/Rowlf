import React from 'react';
import { button, useNavigate } from 'react-router-dom';

const Nav = () => {
	const navigate = useNavigate()
	return (
		<div className="nav-container">
			<div className='title'>
				<img src="/favicon.svg" alt="Logo" />
				<h1>Hello Kitchen</h1>
			</div>
			<nav className="nav-bar">
				<button className="navbutton" onClick={navigate('/')} >Home</button>
				<button className="navbutton" onClick={navigate('/about')} >About</button>
				<button className="navbutton" onClick={navigate('/recipes')} >Recipes</button>
				<button className="navbutton" onClick={navigate('/cart')} >Cart</button>
				<button className="navbutton" onClick={navigate('/profile')} >Profile</button>
			</nav>
		</div>
	);
};

export default Nav;
