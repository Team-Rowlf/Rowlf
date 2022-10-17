import React, { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../../features/user/userSlice.js";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { attemptUpdateRecipe, clearSingleRecipe, fetchSingleRecipe, getRecipeStatus } from "../../features/recipes/recipesSlice.js";

const ModifyRecipeAdminPage = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const status = useSelector(getRecipeStatus)
    const recipe = useSelector((state) => state.recipes.singleRecipe)
    const [form, setForm] = useState({
        name: '',
        url: '',
        img: '',
        servings: '',
        cookTime: '',
        isActive: '',
    })
    const [cuisines, setCuisines] = useState([])
    const [restrictions, setRestrictions] = useState([])
    const [lineItems, setLineItems] = useState([{
        name: '',
        measurement: '',
        qty: ''
    }]);

    const cuisineTypes = [
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

    const restrictionTypes = [
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
        dispatch(fetchSingleRecipe(params.id))
        return () => {
            dispatch(clearSingleRecipe())
        }
    },[]);

    useEffect(() => {
        if ((status === 'succeeded') && recipe.name) {
            // casting ints to strings for button disabled check
            let copy = {...recipe};
            copy.servings = copy.servings.toString();
            copy.cookTime = copy.cookTime.toString();
            setForm(copy);

            let cuisineTags = recipe.cuisines.map(cuisine => cuisine.name);
            setCuisines([...cuisineTags]);
            let restrictionTags = recipe.restrictions.map(restriction => restriction.name);
            setRestrictions([...restrictionTags]);
            let ingredients = recipe.lineItems.map((item) => ({
                name: item.ingredient.name,
                measurement: item.measurement,
                qty: item.qty.toString()
            }));
            setLineItems([...ingredients]);
        }
    },[status, recipe.name]);

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
    const handleCuisineChange = (idx) => (event) => {
        let copy = [...cuisines];
        copy[idx] = event.target.value;
        setCuisines([...copy])
    }
    const handleRestrictionChange = (idx) => (event) => {
        let copy = [...restrictions];
        copy[idx] = event.target.value;
        setRestrictions([...copy])
    }
    const addTag = (props) => (event) => {
        event.preventDefault();
        if (props === "cuisine") setCuisines([...cuisines, ''])
        if (props === "restriction") setRestrictions([...restrictions, ''])
    }
    const removeTag = (props) => (event) => {
        event.preventDefault();
        if (props === "cuisine") {
            let copy = [...cuisines];
            copy.pop();
            setCuisines([...copy]);
        }
        if (props === "restriction") {
            let copy = [...restrictions];
            copy.pop();
            setRestrictions([...copy])
        }
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
        if (!lineItems) return true;
        if (lineItems.length > 1) {
            let names = lineItems.map(item => item.name.length)
            return names.includes(0)
        } else {
            return !lineItems[0].name.length
        }
    };
    const checkCuisinesNotEmpty = () => {
        let filtered = cuisines.filter(cuisine => cuisine.length);
        return !filtered.length
    }
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

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedRecipe = { ...form };
        updatedRecipe.servings = Number(updatedRecipe.servings);
        updatedRecipe.cookTime = Number(updatedRecipe.cookTime)
        let ingredients = validateLineItemsQtyMeasure();
        let cuisinesFiltered = cuisines.filter(cuisine => cuisine.length)
        let restrictionsFiltered = restrictions.filter(restriction => restriction.length)

        dispatch(attemptUpdateRecipe({
            recipeDetails: updatedRecipe,
            cuisines: cuisinesFiltered,
            restrictions: restrictionsFiltered,
            ingredients: ingredients
        }))

        toast.success("Changes saved!", {
            position: 'bottom-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })
    }

    const checkDisabled = () => {
        return !form.name.length 
            || !form.url.length 
            || !form.img.length 
            || !form.servings.length 
            || !form.cookTime.length 
            || checkLineItemsIngredients()
            || checkCuisinesNotEmpty()
    };

    return (
        <div>
            {status === 'pending' ? 
                <h1 className="loading">Loading...</h1>
                :
                <form id="modify-recipe-form" onSubmit={handleSubmit}>
                    <h2 className="modify-recipe-title">Modify Recipe Page</h2>
                    <div className="form-line">
                        <span className="modify-recipe-label">
                            {"Recipe Name: "}
                        </span>
                        <input
                        className="modify-recipe-form"
                        placeholder="Recipe Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange("name")}
                        />
                    </div>
                    <div className="form-line">
                        <span className="modify-recipe-label">
                            {"Recipe Url: "} 
                        </span>
                        <input
                        className="modify-recipe-form"
                        placeholder="Recipe Url"
                        name="url"
                        value={form.url}
                        onChange={handleChange("url")}
                        />
                    </div>
                    <div className="form-line">
                        <span className="modify-recipe-label">
                            {"Image Url: "}
                        </span>
                        <input
                        className="modify-recipe-form"
                        placeholder="Recipe Image Url"
                        name="img"
                        value={form.img}
                        onChange={handleChange("img")}
                        />
                    </div>
                    <div className="form-line">
                        <span className="modify-recipe-label">
                            {"Servings: "}
                        </span>
                        <input
                        className="modify-recipe-form"
                        placeholder="Servings"
                        name="servings"
                        value={form.servings}
                        onChange={handleChange("servings")}
                        />
                    </div>
                    <div className="form-line">
                        <span className="modify-recipe-label">
                            {"Cook Time (mins): "}
                        </span>
                        <input
                        className="modify-recipe-form"
                        placeholder="Cook Time (mins)"
                        name="cookTime"
                        value={form.cookTime}
                        onChange={handleChange("cookTime")}
                        />
                    </div>
                    <div className="form-line">
                        <span className="modify-recipe-label">
                            {"Is Active? "}
                        </span>
                        <select defaultValue={form.isActive} onChange={handleChange("isActive")}>
                            <option>true</option>
                            <option>false</option>
                        </select>
                    </div>
                    <div>
                        Cuisines (at least one required):
                        {cuisines.map((cuisine,idx) => {
                            return(
                                <div key={idx} className="cuisine-form-line">
                                    <label htmlFor="cuisines">{`Cuisine ${idx+1}`}</label>
                                    <select defaultValue={cuisine} className='cuisine-selector' onChange={handleCuisineChange(idx)}>
                                        {cuisineTypes.map((ele, index) => (
                                            <option value={ele} key={index}>
                                                {ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )
                        })}
                        <button type='click' className="add-cuisine-tag" onClick={addTag("cuisine")}>Add Cuisine</button>
                        {cuisines.length > 1 ?
                            <button type='click' className="delete-cuisine-tag" onClick={removeTag("cuisine")}>Remove Cuisine</button>
                            : <></>
                        }
                    </div>
                    <div>
                        Restrictions (optional):
                        {restrictions.map((restriction,idx) => {
                            return(
                                <div key={idx} className="restriction-form-line">
                                    <label htmlFor="restrictions">{`Restriction ${idx+1}`}</label>
                                    <select defaultValue={restriction} className='restriction-selector' onChange={handleRestrictionChange(idx)}>
                                        {restrictionTypes.map((ele, index) => (
                                            <option value={ele} key={index}>
                                                {ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )
                        })}
                        <button type="click" className="add-restriction-tag" onClick={addTag("restriction")}>Add Restriction</button>
                        {restrictions.length ?
                            <button type='click' className="delete-restriction-tag" onClick={removeTag("restriction")}>Remove Restriction</button>
                            : <></>
                        }
                    </div>
                    <div>
                        Ingredients:
                        {lineItems.map((lineItem,idx) => {
                            return (
                                <div className="recipe-line-item" key={idx}>
                                    <input
                                            className="modify-ingredient-form"
                                            placeholder="Ingredient"
                                            name="ingredient"
                                            value={lineItem.name}
                                            onChange={handleLineItemChange(idx,"name")}
                                        />
                                    <input
                                            className="modify-ingredient-form"
                                            placeholder="Quantity (in decimals)"
                                            name="quantity"
                                            type="number"
                                            value={lineItem.qty}
                                            onChange={handleLineItemChange(idx,"qty")}
                                        />
                                    <input
                                            className="modify-ingredient-form"
                                            placeholder="Measurement"
                                            name="measurement"
                                            value={lineItem.measurement}
                                            onChange={handleLineItemChange(idx,"measurement")}
                                        />
                                </div>
                            )
                        })}
                        <button type='click' className="add-line-item-button" onClick={addLineItem}>Add Ingredient</button>
                        {lineItems.length > 1 ? 
                            <button type='click' className="delete-line-item-button" onClick={deleteLastLineItem}>Remove Ingredient</button>
                            : <></>
                        }
                    </div>
                    <div>
                        <button className={checkDisabled() ? 'navbutton disabled' :'navbutton'} type="submit" disabled={checkDisabled()}>
                            Save Changes
                        </button>
                        <button onClick={() => navigate('/admin/recipes?page=1')}>
                            Back to Recipes
                        </button>
                    </div>
                </form>
            }
        </div>
    )
}

export default ModifyRecipeAdminPage;