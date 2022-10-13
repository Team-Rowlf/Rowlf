import React, { useEffect, useState } from "react";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { fetchUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddRecipeAdminPage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if ((user.isLogged && !user.isAdmin) || !token) {
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

    // gonna need some form handling, etc here.

    return (
        <div>
            <Nav />
            <h1 className="loading">Dummy component</h1>
        </div>
    )
};

export default AddRecipeAdminPage;