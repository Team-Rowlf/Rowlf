import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
	createUser,
	validateSignupForm,
	getFormInputAvailable,
} from '../features/user/userSlice';

const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [signUp, setSignUp] = React.useState({});
	const validate = useSelector(getFormInputAvailable);

	const handleAdditionalValidate = (prop) => (event) => {
		const value = event.target.value;
		value.length >= 6 && dispatch(validateSignupForm({ prop, value }));
	};
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
	React.useEffect(() => {}, [validate]);

	return (
		<div className="signUp">
			{' '}
			<div className="img-signup-container">
				<img id="img-signup-id" src="/largelogo.svg" alt="Logo" />
			</div>
			<form onSubmit={handleSubmit} className="form-signUp">
				<h1>Sign Up</h1>
				<p>Please fill in this form to create an account.</p>
				<hr />
				<div className="form-signup-container">
					<label htmlFor="username"> Username: </label>
					<input
						name="username"
						className="input-signUp"
						type="text"
						placeholder="Username"
						onChange={handleChange('username')}
						required
						min={6}
						onBlur={handleAdditionalValidate('username')}
					/>
					{!validate && <p> Username is Taken </p>}
					<label htmlFor="email"> Email: </label>
					<input
						name="email"
						className="input-signUp"
						type="email"
						placeholder="Email"
						onChange={handleChange('email')}
						onBlur={handleAdditionalValidate('email')}
						required
					/>
					{!validate && <p> Email is Taken </p>}
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
					<p>
						By creating an account you agree to our{' '}
						<Link to="terms&privacy">Terms & Privacy</Link>
					</p>
					<button type="submit" className="registerbtn">
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Signup;
