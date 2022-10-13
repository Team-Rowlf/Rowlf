import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../general/Home.jsx';
import Login from '../account/Login.jsx';
import Signup from '../account/Signup.jsx';
import NotFound from '../general/NotFound.jsx';
import User from '../account/User.jsx';
import ShoppingList from '../account/ShoppingList.jsx';
import Profile from '../account/Profile.jsx';
import About from '../general/About.jsx';
import Recipes from '../pages/AllRecipes.jsx';
import RecipePage from '../pages/SingleRecipe.jsx';
import Likes from '../pages/Likes.jsx';
import Dislikes from '../pages/Dislikes.jsx';
import LeafletMap from '../leaflet/LeafletMap.jsx';

const RoutesComponent = () => {
    return (
        <Routes>
			<Route index element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signUp" element={<Signup />} />
			<Route path="/about" element={<About />} />
			<Route path="/user" element={<User />}>
				<Route index element={<ShoppingList />} />
				<Route path="shoppingList" element={<ShoppingList />} />
				<Route path="recipes" element={<Recipes />} />
				<Route path="recipes/:recipeId" element={<RecipePage />} />
				<Route path="profile" element={<Profile />}>
					<Route index element={<Likes />} />
					<Route path="likes" element={<Likes />} />
					<Route path="dislikes" element={<Dislikes />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
			<Route path="leaflet" element={<LeafletMap />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
    )
};

export default RoutesComponent;