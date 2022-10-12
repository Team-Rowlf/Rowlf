import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../general/Nav.jsx';
import { fetchRecipes } from '../../features/recipes/recipesSlice';
import { getUserToken } from '../../features/user/userSlice.js';
import {
  getUserDisLikes,
  getUserLikes,
} from '../../features/profile/profileSlice.js';
const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(getUserToken);

  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    !user.isLogged && navigate('/');
  }, [user]);

  React.useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(getUserLikes({ token }));
    dispatch(getUserDisLikes({ token }));
  }, []);

  return (
    <div className="user">
      <Nav />
      <Outlet />
    </div>
  );
};

export default User;
