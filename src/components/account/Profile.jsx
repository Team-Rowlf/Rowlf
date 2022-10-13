import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
	const profile = useSelector((state) => state.profile);
	React.useEffect(() => {}, [profile]);
	return (
		<div className="profile">
			<p>
				<u>Profile</u>
			</p>
			<nav>
				<Link to="likes"> Likes </Link>
				<Link to="dislikes"> Dislikes </Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Profile;
