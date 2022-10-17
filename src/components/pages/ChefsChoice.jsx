import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggestedRecipeMatches } from "../../features/recipes/recipesSlice";

const ChefsChoice = () => {
    const dispatch = useDispatch();
    const allRecipes = useSelector((state) => state.recipes.recipes);
    const dislikes = useSelector((state) => state.profile.dislikes);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [submitted, setSubmitted] = useState(false);
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

    // possible idea: create new array in recipes store; once suggestion button clicked, just fetch all possible matches
    // then, have a method in here that will display some random recipes
    // if no matches found, say something like "Sorry, no matches found"
    // if less than 3 or so satisfy parameters, can display some message like "only 1/2 match(es) found:"
    // otherwise, say something like "x matches found" and then display a few options
    // then, could show a button that says something like "add all to shopping list"

    // once that works, could also give users the option to reject recipes they don't want to make
    // -- would then want to remove that recipe from the suggested list in store and local list here, then find a new match to replace it

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
        console.log(filtered.length)
        setSubmitted(true);
    }

    // next, want to write in some logic that randomly chooses recipes from the filtered list
    // basically, want to choose random recipes to display; keep track of total servings and keep adding to list until serving count met or exceeded
    // if not enough suggested recipes to meet servings, display a text warning or something that says so
    // if no recipes match filtered requirments, then display that message as well;

    const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
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
                    <div>(Placeholder for displaying recipes)</div>
                    :
                    <div>Sorry, no recipes matched your requirments</div>
                : <></>
            }
        </div>
    )
}

export default ChefsChoice;