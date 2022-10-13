import React, { useEffect, useState } from "react";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { fetchUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AllRecipesAdminPage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for now, just display recipes in table; have sort/filter functionality
    // can add in ability to click to edit recipe for now; just lead to dummy component
    // -- want to figure out the deletion thing before building out the modify
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

    // add in second use effect for loading recipes by page, sort, etc

    return (
        <div>
            <Nav />
            <h1 className="loading">Dummy component</h1>
        </div>
    )
};

export default AllRecipesAdminPage;