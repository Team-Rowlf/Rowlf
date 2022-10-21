import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutlet } from 'react-router-dom';
import { fetchUser } from '../../features/user/userSlice.js';
import { toast } from 'react-toastify';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../general/Nav.jsx';

const AdminPortal = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { props } = useOutlet();
  const tabURL = props.children.props.match.route.path;

  useEffect(() => {
    document.querySelector(`button[id=${tabURL}]`)?.classList.add('active');
  }, []);
  useEffect(() => {}, [OnClick]);

  const OnClick = (event) => {
    let tablinks = document.getElementsByClassName('tab');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    if (event.target) {
      event.target.className += ' active';
    }
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if ((user.isLogged && !user.isAdmin) || !token) {
      toast.error('Not authorized for admin portal', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      navigate('/');
    }
  }, [user.isLogged]);

  return (
    <>
      <Nav />
      <div className="admin">
        <nav>
          <Link to={'users'}>
            <button className="tab" id="users" onClick={OnClick}>
              Users
            </button>
          </Link>
          <Link to={'recipes?page=1'}>
            <button className="tab" id="recipes" onClick={OnClick}>
              Recipes
            </button>
          </Link>
          <Link to={'addrecipe'}>
            <button className="tab" id="addrecipe" onClick={OnClick}>
              Add Recipe
            </button>
          </Link>
          <Link to={'userSuggestions'}>
            <button className="tab" id="userSuggestions" onClick={OnClick}>
              Suggestions
            </button>
          </Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default AdminPortal;
