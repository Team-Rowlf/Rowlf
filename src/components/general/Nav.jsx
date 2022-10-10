import React from 'react';
import { useDispatch } from 'react-redux';
import { button, useNavigate } from 'react-router-dom';
import { logout } from '../../features/user/userSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav-title">
        <a href="/">
          <img className="small-logo" src="/favicon.svg" alt="Logo" />
        </a>
        <h1>Hello Kitchen</h1>
      </div>
      <nav className="nav-bar">
        <button className="navbutton" onClick={() => navigate('/user/profile')}>
          Profile
        </button>
        <button
          className="navbutton"
          onClick={() => navigate('/user/recipes?page=1')}
        >
          Recipes
        </button>
        <button
          className="navbutton"
          onClick={() => navigate('/user/shoppingList')}
        >
          Cart
        </button>
        <button className="navbutton" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Nav;
