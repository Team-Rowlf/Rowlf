import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from './userSlice';

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [signUp, setSignUp] = React.useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createUser({ signUp })) && navigate('/login');
	};
	const handleChange = (prop) => (event) => {
		const password = document.querySelector('input[name=password]');
		const confirm = document.querySelector('input[name=retype_password]');
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
	return (
		<div className="signUp">
			{' '}
			<div className="img-signup-container">
				<img className="img-signup" src="/images/recipesArt.jpg" alt="" />
			</div>
			<form onSubmit={handleSubmit} className="form-signUp">
				<label htmlFor="username"> Username: </label>
				<input
					name="username"
					className="input-signUp"
					type="text"
					placeholder="Username"
					onChange={handleChange('username')}
					required
					min={6}
				/>
				<label htmlFor="email"> Email: </label>
				<input
					name="email"
					className="input-signUp"
					type="email"
					placeholder="Email"
					onChange={handleChange('email')}
					required
				/>
				<label htmlFor="password"> Password </label>
				<input
					name="password"
					className="input-signUp"
					type="password"
					placeholder="password"
					onChange={handleChange('password')}
					required
					min={5}
				/>
				<label htmlFor="retype_password"> Retype Password </label>
				<input
					name="retype_password"
					className="input-signUp"
					type="password"
					placeholder="password"
					onChange={handleChange('password')}
					required
					min={5}
				/>
				<button className="button-signUp" type="submit">
					{' '}
					SignUp{' '}
				</button>
			</form>
		</div>
	);
};

export default SignUp;
