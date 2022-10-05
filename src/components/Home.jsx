import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link, Outlet } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	React.useEffect(() => {
		(user.isLogged &&
			user.isAdmin &&
			navigate(`/admin/${user.userInfo.name}`)) ||
			(user.isLogged && navigate('/user/shoppingList'));
	}, [user.isLogged]);
	return (
		<div className="home">
			<p>Welcome: </p>
			<nav>
				<Link to="login"> Login </Link>
				<Link to="signUp"> SignUp </Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default Home;
