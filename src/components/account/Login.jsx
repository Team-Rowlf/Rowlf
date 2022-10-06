import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, fetchUser } from '../../features/user/userSlice';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [login, setLogin] = React.useState({});
	const loginAttempt = useSelector((state) => state.user.token);

	const handleRegister = () => {
		navigate('/signUp');
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(loginUser({ login }));
	};
	const handleChange = (prop) => (event) => {
		setLogin({
			...login,
			[prop]: event.target.value,
		});
	};
	React.useEffect(() => {
		loginAttempt && dispatch(fetchUser()) && navigate('/');
	}, [loginAttempt]);

	return (
		<>
			<div className="large-logo">
				<img src="/largelogo.svg" alt="Logo" />
				<h1>HELLO KITCHEN</h1>
			</div>
			<div className="login">
				<div className="loginContainer">
					<h1>Login</h1>
					<hr />
					<form onSubmit={handleSubmit} autoComplete="on">
						<div className="box">
							<label htmlFor="username" className="fl fontLabel">
								{' '}
								Username:{' '}
							</label>
							<div className="fr">
								<input
									type="text"
									name="username"
									placeholder="Username"
									className="textBox"
									autoFocus="on"
									required
									onChange={handleChange('username')}
								/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="password" className="fl fontLabel">
								{' '}
								Password:{' '}
							</label>
							<div className="fr">
								<input
									type="password"
									required
									name="password"
									placeholder="Password"
									className="textBox"
									onChange={handleChange('password')}
								/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<input
								type="submit"
								name="login"
								className="submit"
								value="Login"
							/>
							<button onClick={handleRegister}> Register </button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
