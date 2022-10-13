import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../features/user/userSlice.js";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';

const AdminPortal = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchUser())
    },[]);

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if ((user.isLogged && !user.isAdmin) || !token) {
            // shows if not logged in; unsure why doesn't appear if logged in
            toast.error("Not authorized for admin portal", {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            navigate('/');
        }
    },[user.isLogged]);

    return (
        <div id="admin-portal">
            <Nav />
            <h1>Welcome back to the Admin Portal</h1>
            <div className="admin-portal-link-container">
                <div className="admin-portal-link">
                    <button className="navbutton" onClick={() => navigate('allusers?page=1')}>
                        All Users
                    </button>
                </div>
                <div className="admin-portal-link">
                    <button className="navbutton" onClick={() => navigate('allrecipes?page=1')}>
                        All Recipes
                    </button>
                </div>
                <div className="admin-portal-link">
                    <button className="navbutton" onClick={() => navigate('addrecipe')}>
                        Add Recipe
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AdminPortal;