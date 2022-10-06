import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { createUser } from '../../features/user/userSlice';

const Signup = () => {
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
		<>
			<div className="large-logo">
				<img src="/largelogo.svg" alt="Logo" />
				<h1>HELLO KITCHEN</h1>
			</div>
			<div className='signup'>
				<div className="signupContainer">
					<h1>Sign Up</h1>
					<p>Please fill in this form to create an account.</p>
					<hr />
					<form method="post" autoComplete="on">
			
						<div className="box">
							<label htmlFor="firstName" className="fl fontLabel"> First Name: </label>
							<div className="fr">
									<input type="text" name="firstName" placeholder="First Name"
										className="textBox" autoFocus="on" required/>
							</div>
							<div className="clr"></div>
						</div>


						<div className="box">
							<label htmlFor="lastName" className="fl fontLabel"> Last Name: </label>
							<div className="fr">
								<input type="text" required name="lastName"
									placeholder="Last Name" className="textBox"/>
							</div>
							<div className="clr"></div>
						</div>


						<div className="box">
							<label htmlFor="phone" className="fl fontLabel"> Phone: </label>
							<div className="fr">
									<input type="text" required name="phoneNo" maxLength="10" placeholder="Phone Number" className="textBox"/>
							</div>
							<div className="clr"></div>
						</div>


						<div className="box">
							<label htmlFor="email" className="fl fontLabel"> Email: </label>
							<div className="fr">
									<input type="email" required name="email" placeholder="Email" className="textBox"/>
							</div>
							<div className="clr"></div>
						</div>


						<div className="box">
							<label htmlFor="password" className="fl fontLabel"> Password </label>
							<div className="fr">
									<input type="Password" required name="password" placeholder="Password" className="textBox"/>
							</div>
							<div className="clr"></div>
						</div>

						<div className="box radio">
							<label htmlFor="gender" className="fl fontLabel"> Gender: </label> &nbsp; &nbsp; 
								<input type="radio" name="Gender" value="Male" required/> Male &nbsp; 
								<input type="radio" name="Gender" value="Female" required/> Female &nbsp; 
								<input type="radio" name="Gender" value="Other" required/> Other
						</div>


						<div className="box terms">
								<input type="checkbox" name="Terms" required/> &nbsp; I accept the  
									<a href='/agreement'>
										terms and conditions
									</a>
						</div>



						<div className="box" >
								<input type="Submit" name="Register" className="submit" value="Register"/>
								<button onClick={navigate('/login')}>Login</button>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default Signup;
