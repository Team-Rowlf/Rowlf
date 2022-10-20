import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, useOutlet } from 'react-router-dom';

const Profile = () => {
	const profile = useSelector((state) => state.profile);
	const { props } = useOutlet();
	const tabURL = props.children.props.match.route.path;

	useEffect(() => {
		document.querySelector(`button[id=${tabURL}]`)?.classList.add('active');
	}, []);
	useEffect(() => {}, [profile]);
	useEffect(() => {}, [OnClick]);

	const OnClick = (event) => {
		let tablinks = document.getElementsByClassName('tab');
		for (let i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(' active', '');
		}

		if (event.target) {
			event.target.className += ' active';
		}
	};

	return (
		<div className="profile">
			<nav>
				<Link to="likes">
					<button className="tab" id="likes" onClick={OnClick}>
						Likes
					</button>
				</Link>
				<Link to="dislikes">
					<button className="tab" id="dislikes" onClick={OnClick}>
						Dislikes
					</button>
				</Link>
				<Link to="edit">
					<button className="tab" id="edit" onClick={OnClick}>
						Profile
					</button>
				</Link>
				<Link to="history">
					<button className="tab" id="history" onClick={OnClick}>
						History
					</button>
				</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Profile;
