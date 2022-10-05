import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from './userSlice';
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
			{' '}
			<div className="img-login-container">
				<img className="img-login" src="/images/recipesArt.jpg" alt="" />
			</div>
			<form onSubmit={handleSubmit} className="form-login">
				<input
					name="username"
					className="input-login"
					type="text"
					placeholder="Username"
					onChange={handleChange('username')}
				/>
				<input
					name="password"
					className="input-login"
					type="password"
					placeholder="password"
					onChange={handleChange('password')}
				/>
				<button className="button-login" type="submit">
					{' '}
					Login{' '}
				</button>
			</form>{' '}
		</div>
	);
};

export default Login;
