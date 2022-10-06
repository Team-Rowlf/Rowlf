import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/general/Footer.jsx';
import Home from './components/general/Home.jsx';
import Login from './components/account/Login.jsx';
import Signup from './components/account/Signup.jsx';
import NotFound from './components/general/NotFound.jsx';
import User from './components/account/User.jsx';
import ShoppingList from './components/account/ShoppingList.jsx';
import Profile from './components/account/Profile.jsx';
import { fetchUser } from './features/user/userSlice.js';
import About from './components/general/About.jsx';

function App() {
	const navigate = useNavigate();
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	React.useEffect(() => {
		// dispatch(fetchUser());
	}, []);

	return (
		<>
			<div id="main">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signUp" element={<Signup />} />
					<Route path="/about" element={<About />} />
					<Route path="/user" element={<User />}>
						<Route index element={<ShoppingList />} />
						<Route path="shoppingList" element={<ShoppingList />} />
						<Route path="profile" element={<Profile />} />
						<Route path="*" element={<NotFound />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
