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
import AdminPortal from '../admin/AdminPortal.jsx';
import AllUsersAdminPage from '../admin/Users.jsx';
import AllRecipesAdminPage from '../admin/Recipes.jsx';
import AddRecipeAdminPage from '../admin/AddRecipe.jsx';
import ModifyRecipeAdminPage from '../admin/ModifyRecipe.jsx';
import MapMain from '../googleMaps/MapMain.jsx';
import ListHistory from '../account/ListHistory.jsx';
import ChefsChoice from '../pages/ChefsChoice.jsx';
import UserInfo from '../account/UserInfo.jsx';
import UserSuggestionsAdminPage from '../admin/UserSuggestionsAdminPage.jsx';
import ReviewUserSuggestionsAdminPage from '../admin/ReviewUserSuggestions.jsx';
import UserRecipeSuggestion from '../pages/UserRecipeSuggestion.jsx';
import UserSuggestions from '../account/UserSuggestions.jsx';

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
        <Route path="userRecipeSuggestion" element={<UserRecipeSuggestion />} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<Likes />} />
          <Route path="likes" element={<Likes />} />
          <Route path="dislikes" element={<Dislikes />} />
          <Route path="edit" element={<UserInfo />} />
          <Route path="history" element={<ListHistory />} />
          <Route path="userSuggestions" element={<UserSuggestions />} />
        </Route>
        <Route path="chefschoice" element={<ChefsChoice />} />
        <Route
          path="reviewUserSuggestion/:id"
          element={<ReviewUserSuggestionsAdminPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="admin" element={<AdminPortal />}>
        <Route index element={<AllUsersAdminPage />} />
        <Route path="users" element={<AllUsersAdminPage />} />
        <Route path="recipes" element={<AllRecipesAdminPage />} />
        <Route path="addrecipe" element={<AddRecipeAdminPage />} />
        <Route path="updaterecipe/:id" element={<ModifyRecipeAdminPage />} />
        <Route path="userSuggestions" element={<UserSuggestionsAdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="map" element={<MapMain />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesComponent;
