import React from 'react';
import { button, useNavigate } from 'react-router-dom';

const Nav = () => {
	
	const navigate = useNavigate()

	return (
		<div className="nav">
			<div className='title'>
				<img className="small-logo" src="/favicon.svg" alt="Logo" />
				<h1>Hello Kitchen</h1>
			</div>
			<nav className="nav-bar">
				<button className="navbutton" onClick={navigate('/')} >Home</button>
				<button className="navbutton" onClick={navigate('/user/about')} >About</button>
				<button className="navbutton" onClick={navigate('/user/recipes')} >Recipes</button>
				<button className="navbutton" onClick={navigate('/user/cart')} >Cart</button>
				<button className="navbutton" onClick={navigate('/user/profile')} >Profile</button>
			</nav>
		</div>
	);
};

export default Nav;