import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../features/user/userSlice';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, setLogin] = React.useState({});
	const loginAttempt = useSelector((state) => state.user);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(fetchUser({ login }));
	};
	const handleChange = (prop) => (event) => {
		setLogin({
			...login,
			[prop]: event.target.value,
		});
	};
	React.useEffect(() => {}, []);

	return (
		<div className="login">
			<div className="img-login-container">
				<img className="img-login" src="/largelogo.svg" alt="Logo" />
			</div>
			<form onSubmit={handleSubmit} className="form-login">
				<label htmlFor="username">Username: </label> <br />
				<input
					name="username"
					id="username"
					type="text"
					placeholder="Username"
					onChange={handleChange('username')}
				/>
				<br />
				<label htmlFor="password">Password: </label> <br />
				<input
					name="password"
					id="password"
					type="password"
					placeholder="password"
					onChange={handleChange('password')}
				/>
				<br />
				<button className="button-login" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
