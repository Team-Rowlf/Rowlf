import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Footer = () => {
	const location = useLocation();

	return (
		<div className="footer">
			<div> ABOUT US FOOTER </div>
			{location.pathname === '/about' ? (
				<Link to="/"> Home </Link>
			) : (
				<Link to="/about"> More about us </Link>
			)}
		</div>
	);
};

export default Footer;
