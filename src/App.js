import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import NotFound from './components/NotFound.jsx';
import User from './features/user/User';
import ShoppingList from './features/shoppingList/ShoppingList';
import Profile from './features/profile/Profile';

function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<>
			<div id="main">
				<Nav />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />}>
						<Route index element={<Login />} />
						<Route path="login" element={<Login />} />
						<Route path="signUp" element={<Signup />} />
						<Route path="*" element={<NotFound />} />
					</Route>
					<Route path="/user" element={<User />}>
						<Route index element={<ShoppingList />} />
						<Route path="shoppingList" element={<ShoppingList />} />
						<Route path="profile" element={<Profile />} />
					</Route>
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
