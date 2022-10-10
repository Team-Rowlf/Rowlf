import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../general/Nav.jsx';

const User = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    !user.isLogged && navigate('/');
  }, [user]);

  return (
    <div className="user">
      <Nav />
      <Outlet />
    </div>
  );
};

export default User;
