import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
	editUser,
	validateSignupForm,
	getFormInputAvailable,
	fetchUser
} from '../../features/user/userSlice';

const EditProfile = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate();
	let user = useSelector((state) => state.user.userInfo);

	const handleLogin = () => {
		navigate('/login');
	};
	const [signUp, setSignUp] = useState({});
	const validate = useSelector(getFormInputAvailable);

	const handleAdditionalValidate = (prop) => (event) => {
		const value = event.target.value;
		value.length >= 6 && dispatch(validateSignupForm({ prop, value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();

		dispatch(editUser({ signUp }));
	};

	const handleChange = (prop) => (event) => {
		const password = document.querySelector('input[name=password]');
		const confirm = document.querySelector('input[name=confirm_password]');
		setSignUp({
			...signUp,
			[prop]: event.target.value,
		});
		if (confirm.value === password.value) {
			confirm.setCustomValidity('');
		} else {
			confirm.setCustomValidity('Passwords do not match!');
		}
	};
	useEffect(() => {}, [validate]);


	const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm.length ? itm[0].toUpperCase() + itm.slice(1) : itm);
		string = arr.join(' ');
		return string;
	};

	return (
		<>
			<div className="signup">
				<div className="signupContainer">
					{user.firstName ? <h1>Edit {capitalize(user.firstName)}'s Profile</h1> : <h1>Edit Profile</h1>}
					<p>Please change the information on this form to edit your account.</p>
					<hr />
					<form onSubmit={handleSubmit} autoComplete="on">
						<div className="box">
							<label htmlFor="firstName" className="fl fontLabel">
								{' '}
								First Name:{' '}
							</label>
							<div className="fr">
								<input
									type="text"
									name="firstName"
									className="textBox"
									autoFocus="on"
									onChange={handleChange('firstName')}
									required
									min={3}
									defaultValue={capitalize(user.firstName)}
								/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="lastName" className="fl fontLabel">
								{' '}
								Last Name:{' '}
							</label>
							<div className="fr">
								<input
									type="text"
									name="lastName"
									defaultValue={capitalize(user.lastName)}
									className="textBox"
									onChange={handleChange('lastName')}
									required
									min={3}
								/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="username" className="fl fontLabel">
								{' '}
								Username:{' '}
							</label>
							<div className="fr">
								<input
									type="text"
									name="username"
									defaultValue={user.username}
									className="textBox"
									onChange={handleChange('username')}
									required
									min={6}
									onBlur={handleAdditionalValidate('username')}
								/>
							</div>
							<div className="clr"></div>
						</div>

						{!validate['username'] && <p> Username is Taken </p>}

						<div className="box">
							<label htmlFor="phone" className="fl fontLabel">
								{' '}
								Phone:{' '}
							</label>
							<div className="fr">
								<input
									type="text"
									required
									name="phoneNum"
									maxLength="10"
									defaultValue={user.phoneNum}
									className="textBox"
									onChange={handleChange('phoneNum')}
								/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="email" className="fl fontLabel">
								{' '}
								Email:{' '}
							</label>
							<div className="fr">
								<input
									type="email"
									name="email"
									defaultValue={user.email}
									className="textBox"
									required
									onChange={handleChange('email')}
									onBlur={handleAdditionalValidate('email')}
								/>
							</div>
							<div className="clr"></div>
						</div>

						{!validate['email'] && <p> Email is Taken </p>}

						<div className="box">
							<label htmlFor="password" className="fl fontLabel">
								{' '}
								Password:{' '}
							</label>
							<div className="fr">
								<input
									type="Password"
									name="password"
									placeholder="Password"
									className="textBox"
									onChange={handleChange('password')}
									required
									min={5}
								/>
							</div>
							<div className="clr"></div>
						</div>
						<div className="box">
							<label htmlFor="confirm_password" className="fl fontLabel">
								Confirm Password:
							</label>
							<div className="fr">
								<input
									type="Password"
									name="confirm_password"
									placeholder="Confirm Password"
									className="textBox"
									onChange={handleChange('password')}
									required
									min={5}
								/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box radio">
							<label htmlFor="gender" className="fl fontLabel">
								{' '}
								Gender:{' '}
							</label>{' '}
							&nbsp; &nbsp;
							<input
								type="radio"
								name="Gender"
								value="male"
								onChange={handleChange('Gender')}
								required
								defaultChecked={user.gender=='male' ? true : false}
							/>{' '}
							Male &nbsp;
							<input
								type="radio"
								name="Gender"
								value="female"
								onChange={handleChange('Gender')}
								required
								defaultChecked={user.gender=='female' ? true : false}
							/>{' '}
							Female &nbsp;
							<input
								type="radio"
								name="Gender"
								value="other"
								onChange={handleChange('Gender')}
								required
								defaultChecked={user.gender=='other' ? true : false}
							/>{' '}
							Other
						</div>

						<div className="box terms">
							<input type="checkbox" name="Terms" required /> &nbsp; I accept
							the
							<a href="/agreement">terms and conditions</a>
						</div>

						<div className="box">
							<button type="Submit" name="Register" className="submit">
								Edit Profile
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default EditProfile