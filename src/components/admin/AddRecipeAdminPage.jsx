import React, { useEffect, useState } from "react";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { fetchUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { attemptAddRecipe } from "../../features/admin/adminSlice.js";

const AddRecipeAdminPage = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        url: '',
        img: '',
        servings: '',
        cookTime: '',
    });

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
    const handleChange = (props) => (event) => {
        setForm({
          ...form,
          [props]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        // console.log('clicking submit')
        event.preventDefault();
        let recipe = { ...form };
        recipe.servings = Number(recipe.servings);
        recipe.cookTime = Number(recipe.cookTime);
        
        // create thunk here to create object; will later want to add in new parameters
        console.log(recipe)
        dispatch(attemptAddRecipe({
            recipeDetails: recipe,
            cuisines: [],
            restrictions: []
        }))

        // navigate('/adminportal');
        // Toastify({text: `New product created: ${form.name}!`, duration:2500 ,gravity: "bottom", position: "left", backgroundColor: "#ff8300"}).showToast();
    };

    const checkDisabled = () => {
        // later add in checks for cuisine, restrictions? at least for cuisine; don't necessarily need restriction
        return !form.name.length || !form.url.length || !form.img.length || !form.servings.length || !form.cookTime.length
    };

    return (
        <div>
            <Nav />
            <form id="add-recipe-form">
                <h2 className="add-recipe-title">Add Recipe Page</h2>
                <div className="form-line">
                    <input
                    className="add-recipe-form"
                    placeholder="Recipe Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange("name")}
                    />
                </div>
                <div className="form-line">
                    <input
                    className="add-recipe-form"
                    placeholder="Recipe Url"
                    name="url"
                    type="url"
                    value={form.url}
                    onChange={handleChange("url")}
                    />
                </div>
                <div className="form-line">
                    <input
                    className="add-recipe-form"
                    placeholder="Recipe Image Url"
                    name="img"
                    type="url"
                    value={form.img}
                    onChange={handleChange("img")}
                    />
                </div>
                <div className="form-line">
                    <input
                    className="add-recipe-form"
                    placeholder="Servings"
                    name="servings"
                    value={form.servings}
                    onChange={handleChange("servings")}
                    />
                </div>
                <div className="form-line">
                    <input
                    className="add-recipe-form"
                    placeholder="Cook Time (mins)"
                    name="cookTime"
                    value={form.cookTime}
                    onChange={handleChange("cookTime")}
                    />
                </div>
                {/* need selector for cuisines */}
                <div>
                    (Cuisine placeholder)
                </div>
                {/* need selector for restrictions */}
                <div>
                    (Restriction placeholder)
                </div>
                {/* may even need for appliance if want to use that later */}
                
                {/* will need a line for line items; also will need a button to add new ingredient */}
                <div>
                    (Ingredients placeholder)
                </div>

                <button className={checkDisabled() ? 'navbutton disabled' :'navbutton'} type="submit" disabled={checkDisabled()} onClick={handleSubmit}>
                    Add Recipe
                </button>
            </form>
        </div>
    )
};

export default AddRecipeAdminPage;