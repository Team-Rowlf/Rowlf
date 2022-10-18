import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchAddtoShoppingList } from "../../features/shoppingList/shoppingListSlice"

const ChefsChoice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allRecipes = useSelector((state) => state.recipes.recipes);
    const dislikes = useSelector((state) => state.profile.dislikes);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [insufficentServings, setInsufficientServings] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [count, setCount] = useState(0)
    const [form, setForm] = useState({
        people: '1',
        meals: '1',
        cuisines: [],
        restrictions: [],
        appliances: [],
        cookTimes: []
    });
    const [cuisineBool, setCuisineBool] = useState(false);
    const [restrictionBool, setRestrictionBool] = useState(false);
    const [applianceBool, setApplianceBool] = useState(false);
    // will need to figure out how to best set this; could also be something like 'set max cookTime in minutes'
    const [cookTimeBool, setCookTimeBool] = useState(false);
    const cuisines = [
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
    const appliances = ['stovetop','oven','air fryer','grill','instant pot', 'slow cooker'];
    const restrictions = [
        'vegetarian',
        'vegan',
        'glutan-free',
        'nut-free',
        'lactose-free',
        'pescatarian',
      ];

    useEffect(() => {
        if (filteredRecipes.length) {
            randomizeRecipes();
        }
    },[filteredRecipes.length, count])

    const addOrRemoveTag = (props, tag) => () => {
        const copy = [...form[props]];
        let index = copy.indexOf(tag);
        index !== -1 ? copy.splice(index,1) : copy.push(tag);
        setForm({
            ...form,
            [props]: [...copy]            
        });
    }

    const onChangeHandler = (props) => (event) => {
        setForm({
            ...form,
            [props]: event.target.value
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        filterRecipes();
    };

    const filterRecipes = () => {
        const dislikeIds = dislikes.map(recipe => recipe.id)
        let filtered = allRecipes.filter(recipe => !dislikeIds.includes(recipe.id))
        if (form.cuisines.length) {
            filtered = filtered.filter(recipe => recipe.cuisines.some(cuisine => form.cuisines.includes(cuisine.name)))
        }
        if (form.restrictions.length) {
            filtered = filtered.filter(recipe => {
                let recipeRestrictions = recipe.restrictions.map(restriction => restriction.name);
                return form.restrictions.every(restriction => recipeRestrictions.includes(restriction));
            })
        }
        if (form.appliances.length) {
            filtered = filtered.filter(recipe => recipe.appliances.some(appliance => form.appliances.includes(appliance.name)))
        }
        setFilteredRecipes([...filtered]);
        setSubmitted(true);
        setCount(count+1);
    }

    const randomizeRecipes = () => {
        let servings = 0;
        let recipeArray = [];
        // either will stop if servings enough, or if suggestions = the filtered recipes list
        while ((servings < form.people*form.meals) && (recipeArray.length < filteredRecipes.length)) {
            let randIndex = Math.floor(Math.random()*filteredRecipes.length);
            let randRecipe = filteredRecipes[randIndex];
            if (!recipeArray.includes(randRecipe)) {
                recipeArray.push(randRecipe);
                servings += randRecipe.servings;
            }
        }
        if (servings < form.people*form.meals) {
            setInsufficientServings(true);
        } else {
            setInsufficientServings(false);
        }
        setSuggestions([...recipeArray])
    }

    const capitalize = (string) => {
		let arr = string.split(' ');
        console.log(arr)
		arr = arr.map((itm) => itm.length ? itm[0].toUpperCase() + itm.slice(1) : itm);
		string = arr.join(' ');
		return string;
	};

    const checkDisabled = () => {
        return !form.people.length
            || !form.meals.length
            || (cuisineBool && !form.cuisines.length)
            || (restrictionBool && !form.restrictions.length)
            || (applianceBool && !form.appliances.length)
    }

    const addToCartClickHandler = () => {
        for (let i in suggestions) {
            dispatch(fetchAddtoShoppingList({id: suggestions[i].id}));
        }
        navigate("/");
    }

    // make an "Add all to cart" method/functionality
    // when that button is clicked, all recipes will get added to cart
    // should then clear out the suggestions array and reset the insufficient warning, etc. maybe even navigate them to cart

    return (
        <div>
            <form id="chefs-choice" onSubmit={onSubmitHandler}>
                <h3>Fill out the questions to find recipe recommendations:</h3>
                <div className="question-answer">
                    <span className="question">How many people are you cooking for?</span>
                    <input type="number" min={"1"} defaultValue="1" onChange={onChangeHandler("people")}/>
                </div>
                <div className="question-answer">
                    <span className="question">How many meals per person are you preparing?</span>
                    <input type="number" min={"1"}  defaultValue="1" onChange={onChangeHandler("meals")}/>
                </div>

                <div className="question-answer">
                    <span className="question">Any cuisine preferences?</span>
                    <label>Yes</label>
                    <input type="checkbox" defaultChecked={cuisineBool} onChange={() => {setCuisineBool(!cuisineBool); setForm({...form, ["cuisines"]: []})}}/>
                </div>
                {cuisineBool ? 
                    <div>
                        <div>Select all that apply: </div>
                        {cuisines.map((cuisine,idx) => 
                            <div key={idx}>
                                <input type="checkbox" onChange={addOrRemoveTag("cuisines",cuisine)}/>
                                <label>{capitalize(cuisine)}</label>
                            </div>
                        )}
                    </div>
                    :
                    <></>
                }

                <div className="question-answer">
                    <span className="question">Any dietary restrictions?</span>
                    <label>Yes</label>
                    <input type="checkbox" defaultChecked={restrictionBool} onChange={() => {setRestrictionBool(!restrictionBool); setForm({...form, ["restrictions"]: []})}}/>
                </div>
                {restrictionBool ? 
                    <div>
                        <div>Select all that apply:</div>
                        {restrictions.map((restriction, idx) => 
                            <div key={idx}>
                                <input type="checkbox" onChange={addOrRemoveTag("restrictions",restriction)}/>
                                <label>{capitalize(restriction)}</label>
                            </div>
                        )}
                    </div>
                    :
                    <></>
                }

                <div className="question-answer">
                    <span className="question">Any cooking appliance preferences?</span>
                    <label>Yes</label>
                    <input type="checkbox" defaultChecked={applianceBool} onChange={() => {setApplianceBool(!applianceBool); setForm({...form, ["appliances"]: []})}}/>
                </div>
                {applianceBool ? 
                    <div>
                        <div>Select all that apply:</div>
                        {appliances.map((appliance, idx) => 
                            <div key={idx}>
                                <input type="checkbox" onChange={addOrRemoveTag("appliances",appliance)}/>
                                <label>{capitalize(appliance)}</label>
                            </div>
                        )}
                    </div>
                    :
                    <></>
                }
                <button type="submit" className={checkDisabled() ? 'disabled' : ''}>See Results!</button>
            </form>
            {submitted ?
                filteredRecipes.length ? 
                    <div>
                        <div>{filteredRecipes.length > 3 ? `${filteredRecipes.length} recipes matched your criteria. The chef suggests the following:` : `Only ${filteredRecipes.length} recipe(s) matched your critera:`}</div>
                        <div>{suggestions.map((recipe, idx) => {
                            return (
                                <div key={idx} className="recipe-display">
                                    <Link to={`/user/recipes/${recipe.id}`}> 
                                        <div>
                                            <img src={recipe.img} alt="recipe" />
                                        </div>
                                        <h2>{recipe.name}</h2>
                                    </Link>
                                    <div className="recipe-details">
                                        <span>{`Cook Time: ${recipe.cookTime} mins, Servings: ${recipe.servings}`}</span>
                                    </div>
                                    <details>
                                        <summary> Ingredients: </summary>
                                        <ul>
                                            {recipe.lineItems.map(ingredient=><li key={ingredient.id}>{capitalize(ingredient.ingredient.name)}</li>)}
                                        </ul>
                                    </details>
                                </div>
                            )
                        })}</div>
                        {insufficentServings ? <div className="insufficient-servings">We apologize, the chef is unable to accomodate your total number of desired meals.</div> : <></>}
                        <button onClick={addToCartClickHandler}>Add All to List</button>
                    </div>
                    :
                    <div>Sorry, no recipes matched your requirments</div>
                : <></>
            }
        </div>
    )
}

export default ChefsChoice;