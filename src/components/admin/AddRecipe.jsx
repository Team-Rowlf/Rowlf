import React, { useEffect, useState } from "react";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { fetchUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    const handleSubmit = (event) => {
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
        <div className="signup">
				<div className="signupContainer">
					<h1>Add New Recipe</h1>
					<p>Please fill in this form to add a new recipe to the database.</p>
					<hr />
					<form onSubmit={handleSubmit} autoComplete="on">
						<div className="box">
							<label htmlFor="name" className="fl fontLabel">
								{' '}
								Recipe Name:{' '}
							</label>
							<div className="fr">
								<input
                                    className="textBox"
                                    placeholder="Recipe Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange("name")}
                                />
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="url" className="fl fontLabel">
								{' '}
								Recipe URL:{' '}
							</label>
							<div className="fr">
								<input
                                    className="textBox"
                                    placeholder="Recipe Url"
                                    name="url"
                                    type="url"
                                    value={form.url}
                                    onChange={handleChange("url")}
                                />
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="img" className="fl fontLabel">
								{' '}
								Image URL:{' '}
							</label>
							<div className="fr">
                                <input
                                    className="textBox"
                                    placeholder="Recipe Image Url"
                                    name="img"
                                    type="url"
                                    value={form.img}
                                    onChange={handleChange("img")}
                                />
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="servings" className="fl fontLabel">
								{' '}
								Servings:{' '}
							</label>
							<div className="fr">
								<input
                                    className="textBox"
                                    placeholder="Servings"
                                    name="servings"
                                    value={form.servings}
                                    onChange={handleChange("servings")}
                                />
							</div>
							<div className="clr"></div>
						</div>

						<div className="box">
							<label htmlFor="cookTime" className="fl fontLabel">
								{' '}
								Cook Time:{' '}
							</label>
							<div className="fr">
								<input
                                    className="textBox"
                                    placeholder="Cook Time (mins)"
                                    name="cookTime"
                                    value={form.cookTime}
                                    onChange={handleChange("cookTime")}
                                    type='number'
                                />
							</div>
							<div className="clr"></div>
						</div>
						<div className="box">
							<label htmlFor="cuisine" className="fl fontLabel">
								Cuisine:
							</label>
							<div className="fr">
                                <select defaultValue={cuisine} id='cuisine' className="textBox"  onChange={handleCuisineChange}>
                                    <option value="" disabled selected>Cuisine</option>
                                    {cuisines.map((ele, index) => (
                                        <option value={ele} key={index}>
                                            {ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
                                        </option>
                                        ))
                                    }
                                </select>
							</div>
							<div className="clr"></div>
						</div>
						<div className="box">
							<label htmlFor="cuisine" className="fl fontLabel">
								Dietary Restriction:
							</label>
							<div className="fr">
                                <select defaultValue={restriction} className="textBox" id='restriction-selector'  onChange={handleRestrictionChange}>
                                    <option value="" disabled selected>Optional</option>
                                    {restrictions.map((ele, index) => (
                                        <option value={ele} key={index}>
                                            {ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
                                        </option>
                                        ))
                                    }
                                </select>
							</div>
							<div className="clr"></div>
						</div>
						<div className="box">
							<label htmlFor="cuisine" className="fl fontLabel">
								Ingredients:
							</label>
							<div className="ingredients">
                                {lineItems.map((lineItem, idx) =>
                                    <div className="ingredient">
                                        <div className="fr" key={idx}>
                                            <input
                                                className="textBox"
                                                placeholder="Name"
                                                name="ingredient"
                                                value={lineItem.name}
                                                onChange={handleLineItemChange(idx,"name")}
                                            />
                                        </div>
                                        <div className="fr">
                                            <input
                                                className="textBox"
                                                placeholder="Quantity (in decimals)"
                                                name="quantity"
                                                type="number"
                                                step='0.01'
                                                value={lineItem.qty}
                                                onChange={handleLineItemChange(idx,"qty")}
                                                />
                                        </div>
                                        <div className="fr">
                                            <input
                                                className="textBox"
                                                placeholder="Measurement"
                                                name="measurement"
                                                value={lineItem.measurment}
                                                onChange={handleLineItemChange(idx,"measurement")}
                                            />
                                        </div>
                                    </div>
                                )}
							</div>
                                <button type='click' className="-button" onClick={addLineItem}>+</button>
                                {lineItems.length > 1 ? 
                                    <button type='click' className="-button" onClick={deleteLastLineItem}>-</button>
                                    : <></>
                                }
							<div className="clr"></div>
						</div>

						<div className="box">
							<button className={checkDisabled() ? 'navbutton disabled' :'navbutton'} type="submit" disabled={checkDisabled()} onClick={handleSubmit}>
                                Add Recipe
                            </button>
						</div>
					</form>
				</div>
			</div>
    )
};

export default AddRecipeAdminPage;