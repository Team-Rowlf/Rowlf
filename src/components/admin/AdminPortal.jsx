import React, { useEffect } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../features/user/userSlice.js";
import { toast, ToastContainer } from 'react-toastify';
import { Link, Outlet } from 'react-router-dom';
import Nav from "../general/Nav.jsx";

const AdminPortal = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {}, [OnClick]);

    const OnClick = (event) => {
		let tablinks = document.getElementsByClassName("tab");
		for (let i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		
		if(event.target){
			event.target.className += " active";
		}
		
	}

    useEffect(() => {
        dispatch(fetchUser())
    },[]);

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

    return (
        <>
        <Nav />
        <div className="admin">
			<nav>
				<Link to={'users'}>
					<button  className="tab active" id="allUsers"  onClick={OnClick}>
							Users 
					</button>
				</Link >
				<Link to={'recipes'}>
					<button  className="tab" id="allRecipes"  onClick={OnClick}>
							Recipes 
					</button>
				</Link >
				<Link to={'addrecipe'}>
					<button  className="tab" id="addRecipe"  onClick={OnClick}>
							Add Recipe 
					</button>
				</Link >
			</nav>
			<Outlet />
		</div>
        </>
        // <div id="admin-portal">
        //     <Nav />
        //     <h1>Welcome back to the Admin Portal</h1>
        //     <div className="admin-portal-link-container">
        //         <div className="admin-portal-link">
        //             <button className="navbutton" onClick={() => navigate('allusers?page=1')}>
        //                 All Users
        //             </button>
        //         </div>
        //         <div className="admin-portal-link">
        //             <button className="navbutton" onClick={() => navigate('allrecipes?page=1')}>
        //                 All Recipes
        //             </button>
        //         </div>
        //         <div className="admin-portal-link">
        //             <button className="navbutton" onClick={() => navigate('addrecipe')}>
        //                 Add Recipe
        //             </button>
        //         </div>
        //     </div>
        //     <ToastContainer limit={1}/>
        // </div>
    )
};

export default AdminPortal;