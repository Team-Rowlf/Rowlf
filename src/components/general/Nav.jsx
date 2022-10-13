import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { button, useNavigate } from 'react-router-dom';
import { logout } from '../../features/user/userSlice';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user.isAdmin) {
      setIsAdmin(true);
    }
  },[user.id,user.isAdmin]);

  return (
    <div className="nav">
      <div className="nav-title">
        <a href="/">
          <img className="small-logo" src="/favicon.svg" alt="Logo" />
        </a>
        <h1>Hello Kitchen</h1>
      </div>
      <nav className="nav-bar">
        <button className="navbutton" onClick={() => navigate('/adminportal')}>
          Admin
        </button>
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
          List
        </button>
        <button className="navbutton" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Nav;
