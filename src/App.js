import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
function App() {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchTemplateAsync());
	// }, [dispatch]);

	return (
		<>
			<div id="main">
				<Routes>
					<Route index element={<Login />} />
					<Route path={'/signup'} element={<Signup />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
