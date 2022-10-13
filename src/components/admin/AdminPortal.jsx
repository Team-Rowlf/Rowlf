import React, { useEffect } from "react"; 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if ((user.id && !user.isAdmin) || !token) {
            navigate('/');
            // add in toast error here; 'user not authorized'
        }
    },[user.id])

    return (
        <div id="admin-portal">
            <h1>Welcome back to the Admin Portal</h1>
            <div className="admin-portal-link-container">
                <div className="admin-portal-link">
                    Link to All Users view
                </div>
                <div className="admin-portal-link">
                    Link to All Recipes view
                </div>
                <div className="admin-portal-link">
                    Link to Add Recipe view
                </div>
            </div>
        </div>
    )
};

export default AdminPortal