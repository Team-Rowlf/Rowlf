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
    const [cuisine, setCuisine] = useState('');
    const [restriction, setRestriction] = useState('');
    const [lineItems, setLineItems] = useState([{
        name: '',
        measurement: '',
        qty: ''
    }]);

    const cuisines = [
		'',
		'american',
		'asian',
		'mexican',
		'pasta',
		'mediterranean',
		'salad',
		'soup',
		'fusion',
		'healthy',
		'other',
	];

	const restrictions = [
		'',
		'vegetarian',
		'vegan',
		'glutan-free',
		'nut-free',
		'lactose-free',
		'pescatarian',
	];

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

    const handleChange = (props) => (event) => {
        setForm({
          ...form,
          [props]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        let recipe = { ...form };
        recipe.servings = Number(recipe.servings);
        recipe.cookTime = Number(recipe.cookTime);
        let ingredients = validateLineItemsQtyMeasure()

        dispatch(attemptAddRecipe({
            recipeDetails: recipe,
            cuisines: [cuisine],
            restrictions: restriction.length ? [restriction] : [],
            ingredients: ingredients
        }))

        navigate('/adminportal');
        toast.success(`New recipe added: "${form.name}"`, {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })
    };

    const handleCuisineChange = (event) => {
        setCuisine(event.target.value)
    }
    const handleRestrictionChange = (event) => {
        setRestriction(event.target.value)
    }

    const handleLineItemChange = (idx, props) => (event) => {
        const copy = [...lineItems];
        copy[idx][props] = event.target.value;
        setLineItems([...copy])
    }
    const addLineItem = (event) => {
        event.preventDefault();
        setLineItems([...lineItems, {
            name: '',
            measurement: '',
            qty: ''
        }]);
    };
    const deleteLastLineItem = (event) => {
        event.preventDefault();
        const copy = [...lineItems];
        copy.pop();
        setLineItems([...copy]);
    }
    const checkLineItemsIngredients = () => {
        // safety check
        if (!lineItems) return true;
        if (lineItems.length > 1) {
            // had issues with using reduce where sometimes .name would be undefined
            let names = lineItems.map(item => item.name.length)
            return names.includes(0)
        } else {
            return !lineItems[0].name.length
        }
    };
    const validateLineItemsQtyMeasure = () => {
        const copy = [...lineItems];
        copy.forEach(lineItem => {
            if (!lineItem.qty.length) {
                lineItem.qty = '1'
            }
            if (!lineItem.measurement.length) {
                lineItem.measurement = 'whole'
            }
        })
        return copy;
    }

    const checkDisabled = () => {
        return !form.name.length 
            || !form.url.length 
            || !form.img.length 
            || !form.servings.length 
            || !form.cookTime.length 
            || !cuisine.length 
            || checkLineItemsIngredients()
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
                <div className="form-line">
                    Select a cuisine: 
                    <select defaultValue={cuisine} id='cuisine-selector'  onChange={handleCuisineChange}>
                        {cuisines.map((ele, index) => (
							<option value={ele} key={index}>
								{ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
							</option>
						))}
                    </select>
                </div>
                <div className="form-line">
                    Select a restriction (optional): 
                    <select defaultValue={restriction} id='restriction-selector'  onChange={handleRestrictionChange}>
                        {restrictions.map((ele, index) => (
							<option value={ele} key={index}>
								{ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
							</option>
						))}
                    </select>
                </div>
                
                {/* will need a line for line items; also will need a button to add new ingredient */}
                <div className="form-line">
                    (Ingredient name required. Qty and measurment default to '1' and 'whole' if not filled out)
                    
                        {lineItems.map((lineItem, idx) =>
                            <div className="new-line-item" key={idx}>
                                <input
                                    className="add-ingredient-form"
                                    placeholder="Ingredient"
                                    name="ingredient"
                                    value={lineItem.name}
                                    onChange={handleLineItemChange(idx,"name")}
                                />
                                <input
                                    className="add-ingredient-form"
                                    placeholder="Quantity (in decimals)"
                                    name="quantity"
                                    type="number"
                                    value={lineItem.qty}
                                    onChange={handleLineItemChange(idx,"qty")}
                                />
                                <input
                                    className="add-ingredient-form"
                                    placeholder="Measurement"
                                    name="measurement"
                                    value={lineItem.measurment}
                                    onChange={handleLineItemChange(idx,"measurement")}
                                />
                            </div>
                        )}
                    <button type='click' className="add-line-item-button" onClick={addLineItem}>Add Ingredient</button>
                    {lineItems.length > 1 ? 
                        <button type='click' className="delete-line-item-button" onClick={deleteLastLineItem}>Remove Ingredient</button>
                        : <></>
                    }
                </div>

                <button className={checkDisabled() ? 'navbutton disabled' :'navbutton'} type="submit" disabled={checkDisabled()} onClick={handleSubmit}>
                    Add Recipe
                </button>
            </form>
        </div>
    )
};

export default AddRecipeAdminPage;