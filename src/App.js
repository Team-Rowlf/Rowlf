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
import About from './components/general/About.jsx';
import Recipes from './components/pages/AllRecipes.jsx';
import RecipePage from './components/pages/SingleRecipe.jsx';
import { fetchUser } from './features/user/userSlice.js';
import Likes from './components/pages/Likes.jsx';
import Dislikes from './components/pages/Dislikes.jsx';
import LeafletMap from './components/leaflet/LeafletMap.jsx';
import AmazonFreshForm from './components/amazon/AmazonFreshForm.js';
function App() {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  React.useEffect(() => {}, []);

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
          {/* Testing route for amazon fresh integration; will want to later move inside shoppinglist componenet */}
          <Route path="amazonfresh" element={<AmazonFreshForm/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
