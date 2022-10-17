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
import EditProfile from '../account/EditProfile.jsx';
import AdminPortal from '../admin/AdminPortal.jsx';
import AllUsersAdminPage from '../admin/Users.jsx';
import AllRecipesAdminPage from '../admin/Recipes.jsx';
import AddRecipeAdminPage from '../admin/AddRecipe.jsx';
import ModifyRecipeAdminPage from '../admin/ModifyRecipe.jsx';
import MapMain from '../googleMaps/MapMain.jsx';
import ListHistory from '../account/ListHistory.jsx';

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
          <Route path="edit" element={<EditProfile />} />
          <Route path="history" element={<ListHistory />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="admin" element={<AdminPortal />}>
        <Route index element={<AllUsersAdminPage />} />
        <Route path="users" element={<AllUsersAdminPage />} />
        <Route path="recipes" element={<AllRecipesAdminPage />} />
        <Route path="addrecipe" element={<AddRecipeAdminPage />} />
        <Route path="updaterecipe/:id" element={<ModifyRecipeAdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="groceryMap" element={<MapMain />} />
      <Route path="leaflet" element={<LeafletMap />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
