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
                <div className="signup">
                    <div className="signupContainer">
                        <form id="modify-recipe-form" onSubmit={handleSubmit}>
                            <h1>Modify Recipe Page</h1>
                            <p>Use this form to update existing recipe in the database.</p>
                            <hr />
                            <div className="box">
                                <span  className="fl fontLabel">
                                    {"Recipe Name: "}
                                </span>
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
                                <span className="fl fontLabel">
                                    {"Recipe Url: "} 
                                </span>
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
                                <span className="fl fontLabel">
                                    {"Image Url: "}
                                </span>
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
                                <span className="fl fontLabel">
                                    {"Servings: "}
                                </span>
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
                                <span className="fl fontLabel">
                                    {"Cook Time (mins): "}
                                </span>
                                <div className="fr">
                                    <input
                                        className="textBox"
                                        placeholder="Cook Time (mins)"
                                        name="cookTime"
                                        value={form.cookTime}
                                        onChange={handleChange("cookTime")}
                                    />
                                </div>
                                <div className="clr"></div>
                            </div>
                            <div className="box">
                                <span className="fl fontLabel">
                                    {"Is Active? "}
                                </span>
                                <div className="fr">
                                   <select className="textBox" defaultValue={form.isActive} onChange={handleChange("isActive")}>
                                        <option>true</option>
                                        <option>false</option>
                                    </select>
                                </div>
                                <div className="clr"></div>
                            </div>
                            <div  className="fl fontLabel modify-header">
                                Cuisines (at least one required):
                            </div>
                            <div>
                                {cuisines.map((cuisine,idx) => {
                                    return(
                                        <div key={idx} className="box">
                                            <label className="fl fontLabel" htmlFor="cuisines">{`Cuisine ${idx+1}`}</label>
                                            <div className="fr">
                                                <select defaultValue={cuisine}  className="textBox" onChange={handleCuisineChange(idx)}>
                                                    {cuisineTypes.map((ele, index) => (
                                                        <option value={ele} key={index}>
                                                            {ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="clr"></div>
                                        </div>
                                    )
                                })}
                                <div className="box">
                                    <button type='click' className="add-tag" onClick={addTag("cuisine")}>+</button>
                                    {cuisines.length > 1 ?
                                        <button type='click' className="delete-tag" onClick={removeTag("cuisine")}>-</button>
                                        : <></>
                                    }
                                    <div className="clr"></div>
                                </div>
                            </div>
                            <div  className="fl fontLabel modify-header">
                                Restrictions (optional):
                            </div>
                            <div>
                                {restrictions.map((restriction,idx) => {
                                    return(
                                        <div key={idx} className="box">
                                            <label className="fl fontLabel" htmlFor="restrictions">{`Restriction ${idx+1}`}</label>
                                            <div className="fr">
                                                <select defaultValue={restriction} className="textBox" onChange={handleRestrictionChange(idx)}>
                                                    {restrictionTypes.map((ele, index) => (
                                                        <option value={ele} key={index}>
                                                            {ele.length ? ele[0].toUpperCase() + ele.slice(1) : ''}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="clr"></div>
                                        </div>
                                    )
                                })}
                                <div className="box">
                                    <button type="click" className="add-tag" onClick={addTag("restriction")}>+</button>
                                    {restrictions.length ?
                                        <button type='click' className="delete-tag" onClick={removeTag("restriction")}>-</button>
                                        : <></>
                                    }
                                    <div className="clr"></div>
                                </div>
                            </div>
                            <div className="box">
                                <label htmlFor="cuisine" className="fl fontLabel">
                                    Ingredients:
                                </label>
                                <div className="ingredients">
                                    {lineItems.map((lineItem,idx) => {
                                        return (
                                            <div className="ingredient" key={idx}>
                                                <div className="fr">
                                                    <input
                                                        className="textBox"
                                                        placeholder="Ingredient"
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
                                                        value={lineItem.qty}
                                                        onChange={handleLineItemChange(idx,"qty")}
                                                    />
                                                </div>
                                                <div className="fr">
                                                    <input
                                                        className="textBox"
                                                        placeholder="Measurement"
                                                        name="measurement"
                                                        value={lineItem.measurement}
                                                        onChange={handleLineItemChange(idx,"measurement")}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="box">
                                    <button type='click' className="-button" onClick={addLineItem}>+</button>
                                    {lineItems.length > 1 ? 
                                        <button type='click' className="-button" onClick={deleteLastLineItem}>-</button>
                                        : <></>
                                    }
                                    <div className="clr"></div>
                                </div>
                            </div>
                            <div className="box save-back-div">
                                <button className={checkDisabled() ? 'save-changes disabled' :'save-changes'} type="submit" disabled={checkDisabled()}>
                                    Save Changes
                                </button>
                                <button className="back-to-recipes" onClick={() => navigate('/admin/recipes?page=1')}>
                                    Back to Recipes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default ModifyRecipeAdminPage;