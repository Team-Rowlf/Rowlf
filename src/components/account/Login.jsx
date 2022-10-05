import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../features/user/userSlice';

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
		<>
			<div className="large-logo">
				<img src="/largelogo.svg" alt="Logo" />
				<h1>HELLO KITCHEN</h1>
			</div>
			<div className='login'>
				<div className="loginContainer">
					<h1>Login</h1>
					<p>Please fill in this form to create an account.</p>
					<hr />
					<form method="post" autoComplete="on">
			
						<div className="box">
							<label htmlFor="username" className="fl fontLabel"> Username: </label>
							<div className="fr">
									<input type="text" name="username" placeholder="Username"
										className="textBox" autoFocus="on" required/>
							</div>
							<div className="clr"></div>
						</div>


						<div className="box">
							<label htmlFor="password" className="fl fontLabel"> Password: </label>
							<div className="fr">
								<input type="text" required name="password"
									placeholder="Password" className="textBox"/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box" >
								<input type="Submit" name="Register" className="submit" value="Register"/>
								<button onClick={navigate('/login')}>Login</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
