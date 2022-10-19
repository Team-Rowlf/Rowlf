import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { capitalize, formatPhoneNumber } from '../../helperfunctions/utils';
import EditProfile from './EditProfile.jsx';

const UserInfo = () => {
	let user = useSelector((state) => state.user.userInfo);
	const [edit, setEdit] = useState(false);

	const handleEdit = () => {
		setEdit(!edit);
	};
	useEffect(() => {}, [user]);

	return edit ? (
		<EditProfile handleEdit={handleEdit} />
	) : (
		<div className="signup">
			<div className="signupContainer">
				{user.firstName ? (
					<h1>{capitalize(user.firstName)}'s Profile</h1>
				) : (
					<h1>Profile</h1>
				)}
				<p>Please change the information on this form to edit your account.</p>
				<hr />

				<div className="box">
					<label htmlFor="firstName" className="fl fontLabel">
						First Name:
					</label>
					<div className="fr">
						<p name="firstName">{capitalize(user.firstName)} </p>
					</div>
					<div className="clr"></div>
				</div>

				<div className="box">
					<label htmlFor="lastName" className="fl fontLabel">
						Last Name:
					</label>
					<div className="fr">
						<p name="lastName">{capitalize(user.lastName)} </p>
					</div>
					<div className="clr"></div>
				</div>

				<div className="box">
					<label htmlFor="username" className="fl fontLabel">
						Username:
					</label>
					<div className="fr">
						<p name="username">{capitalize(user.username)} </p>
					</div>
					<div className="clr"></div>
				</div>

				<div className="box">
					<label htmlFor="phone" className="fl fontLabel">
						Phone:
					</label>
					<div className="fr">
						<p name="phone">{formatPhoneNumber(user.phoneNum) || 'N/A'} </p>
					</div>
					<div className="clr"></div>
				</div>
				<div className="box">
					<label htmlFor="email" className="fl fontLabel">
						Email:
					</label>
					<div className="fr">
						<p name="email">{capitalize(user.email)} </p>
					</div>
					<div className="clr"></div>
				</div>
				<div className="box">
					<label htmlFor="gender" className="fl fontLabel">
						Gender:
					</label>
					<div className="fr">
						<p name="gender">{user.gender || 'N/A'} </p>
					</div>
					<div className="clr"></div>
				</div>
				<div className="box">
					<button onClick={handleEdit} className="submit">
						{' '}
						Edit{' '}
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
