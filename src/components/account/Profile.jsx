import React from 'react';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
	const profile = useSelector((state) => state.profile);
	React.useEffect(() => {}, [profile]);
=======

const Profile = () => {
>>>>>>> main
	return (
		<div className="profile-container">
			<p>
				<u>Profile</u>
			</p>
<<<<<<< HEAD
			<nav>
				<Link to="likes"> Likes </Link>
				<Link to="dislikes"> Dislikes </Link>
			</nav>
			<Outlet />
=======
			<div className="my-recipe-wishlist">
				<ul>
					<li> Item 1</li>
					<li> Item 2</li>
					<li> Item 3</li>
				</ul>
			</div>
>>>>>>> main
		</div>
	);
};

export default Profile;
