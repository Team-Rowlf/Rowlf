import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../../features/user/userSlice.js";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';

const ModifyRecipeAdminPage = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    // will later need to fetch single recipe by id;

    // then, have some sort of update form and a save and back button

    // need to think about the delete status thing
    // if add an isActive field, will likely want to display that in allRecipes table as well, be able to filter for those

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
        <h1 className="loading">PlaceHolder Component for Updating Recipe {params.id}</h1>
    )
}

export default ModifyRecipeAdminPage;