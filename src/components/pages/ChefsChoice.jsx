import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchAddtoShoppingList, resetAddedCount } from '../../features/shoppingList/shoppingListSlice';
import {
	capitalize,
	restrictions,
	cookTimes,
	cuisines,
	appliances,
} from '../../helperfunctions/utils';

const ChefsChoice = () => {
	const dispatch = useDispatch();
    const navigate = useNavigate();
	const allRecipes = useSelector((state) => state.recipes.recipes);
	const dislikes = useSelector((state) => state.profile.dislikes);
    const stateAddedCount = useSelector((state) => state.shoppingList.addedCount)
    const [clickedAddToList, setClickedAddToList] = useState(false);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const [insufficentServings, setInsufficientServings] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [count, setCount] = useState(0);
	const [form, setForm] = useState({
		people: '1',
		meals: '1',
		cuisines: [],
		restrictions: [],
		appliances: [],
		cookTime: 'all',
	});
	const [cuisineBool, setCuisineBool] = useState(false);
	const [restrictionBool, setRestrictionBool] = useState(false);
	const [applianceBool, setApplianceBool] = useState(false);

	useEffect(() => {
        dispatch(resetAddedCount());
		if (filteredRecipes.length) {
			randomizeRecipes();
		}
	}, [filteredRecipes.length, count]);

    useEffect(() => {
        if (clickedAddToList && (stateAddedCount === suggestions.length)) {
            dispatch(resetAddedCount());
            navigate('/user/shoppinglist');
        }
    },[stateAddedCount])

	const addOrRemoveTag = (props, tag) => () => {
		const copy = [...form[props]];
		let index = copy.indexOf(tag);
		index !== -1 ? copy.splice(index, 1) : copy.push(tag);
		setForm({
			...form,
			[props]: [...copy],
		});
	};

	const onChangeHandler = (props) => (event) => {
		setForm({
			...form,
			[props]: event.target.value,
		});
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		filterRecipes();
	};

	const filterRecipes = () => {
		const dislikeIds = dislikes.map((recipe) => recipe.id);
		let filtered = allRecipes.filter(
			(recipe) => !dislikeIds.includes(recipe.id)
		);
		if (form.cuisines.length) {
			filtered = filtered.filter((recipe) =>
				recipe.cuisines.some((cuisine) => form.cuisines.includes(cuisine.name))
			);
		}
		if (form.restrictions.length) {
			filtered = filtered.filter((recipe) => {
				let recipeRestrictions = recipe.restrictions.map(
					(restriction) => restriction.name
				);
				return form.restrictions.every((restriction) =>
					recipeRestrictions.includes(restriction)
				);
			});
		}
		if (form.appliances.length) {
			filtered = filtered.filter((recipe) =>
				recipe.appliances.some((appliance) =>
					form.appliances.includes(appliance.name)
				)
			);
		}
		if (form.cookTime !== 'all') {
			let maxTime = form.cookTime === '< 30 mins' ? 30 : 60;
			filtered = filtered.filter((recipe) => recipe.cookTime <= maxTime);
		}
		setFilteredRecipes([...filtered]);
		setSubmitted(true);
		setCount(count + 1);
	};

	const randomizeRecipes = () => {
		let servings = 0;
		let recipeArray = [];
		// either will stop if servings enough, or if suggestions = the filtered recipes list
		while (
			servings < form.people * form.meals &&
			recipeArray.length < filteredRecipes.length
		) {
			let randIndex = Math.floor(Math.random() * filteredRecipes.length);
			let randRecipe = filteredRecipes[randIndex];
			if (!recipeArray.includes(randRecipe)) {
				recipeArray.push(randRecipe);
				servings += randRecipe.servings;
			}
		}
		if (servings < form.people * form.meals) {
			setInsufficientServings(true);
		} else {
			setInsufficientServings(false);
		}
		setSuggestions([...recipeArray]);
	};

	const checkDisabled = () => {
		return (
			!form.people.length ||
			!form.meals.length ||
			(cuisineBool && !form.cuisines.length) ||
			(restrictionBool && !form.restrictions.length) ||
			(applianceBool && !form.appliances.length)
		);
	};

	const addToCartClickHandler = async () => {
        setClickedAddToList(true)
        for (let i in suggestions) {
            dispatch(fetchAddtoShoppingList({ id: suggestions[i].id }));
        }
	};

	return (
		<div id="chefs-choice-container">
			<form id="chefs-choice-form" onSubmit={onSubmitHandler}>
				<h2>Input your criteria to find recipe recommendations:</h2>
				<div className="question-answer">
					<span className="question">How many people are you cooking for?</span>
					<input
						className="number-input"
						type="number"
						min={'1'}
						defaultValue="1"
						onChange={onChangeHandler('people')}
					/>
				</div>
				<div className="question-answer">
					<span className="question">
						How many meals per person are you preparing?
					</span>
					<input
						className="number-input"
						type="number"
						min={'1'}
						defaultValue="1"
						onChange={onChangeHandler('meals')}
					/>
				</div>

				<div className="question-answer">
					<span className="question">Any cuisine preferences?</span>
					<span>
						<label>Yes</label>
						<input
							className="yes-checkbox"
							type="checkbox"
							defaultChecked={cuisineBool}
							onChange={() => {
								setCuisineBool(!cuisineBool);
								setForm({ ...form, ['cuisines']: [] });
							}}
						/>
					</span>
				</div>
				{cuisineBool ? (
					<div className="selections">
						<div className="select-italicized">Select all that apply: </div>
						<div className="selection-options">
							{cuisines.filter(tag => tag !== 'all').map((cuisine, idx) => (
								<div key={idx}>
									<input
										type="checkbox"
										onChange={addOrRemoveTag('cuisines', cuisine)}
									/>
									<label>{capitalize(cuisine)}</label>
								</div>
							))}
						</div>
					</div>
				) : (
					<></>
				)}

				<div className="question-answer">
					<span className="question">Any dietary restrictions?</span>
					<span>
						<label>Yes</label>
						<input
							className="yes-checkbox"
							type="checkbox"
							defaultChecked={restrictionBool}
							onChange={() => {
								setRestrictionBool(!restrictionBool);
								setForm({ ...form, ['restrictions']: [] });
							}}
						/>
					</span>
				</div>
				{restrictionBool ? (
					<div className="selections">
						<div className="select-italicized">Select all that apply:</div>
						<div className="selection-options">
							{restrictions.filter(tag => tag !== 'all').map((restriction, idx) => (
								<div key={idx}>
									<input
										type="checkbox"
										onChange={addOrRemoveTag('restrictions', restriction)}
									/>
									<label>{capitalize(restriction)}</label>
								</div>
							))}
						</div>
					</div>
				) : (
					<></>
				)}

				<div className="question-answer">
					<span className="question">Any cooking appliance preferences?</span>
					<span>
						<label>Yes</label>
						<input
							className="yes-checkbox"
							type="checkbox"
							defaultChecked={applianceBool}
							onChange={() => {
								setApplianceBool(!applianceBool);
								setForm({ ...form, ['appliances']: [] });
							}}
						/>
					</span>
				</div>
				{applianceBool ? (
					<div className="selections">
						<div className="select-italicized">Select all that apply:</div>
						<div className="selection-options">
							{appliances.map((appliance, idx) => (
								<div key={idx}>
									<input
										type="checkbox"
										onChange={addOrRemoveTag('appliances', appliance)}
									/>
									<label>{capitalize(appliance)}</label>
								</div>
							))}
						</div>
					</div>
				) : (
					<></>
				)}
				<div className="question-answer">
					<span className="question">Desired cook time:</span>
					<select
						defaultValue={form.cookTime}
						onChange={(event) =>
							setForm({ ...form, ['cookTime']: event.target.value })
						}
					>
						{cookTimes.map((time) => (
							<option key={time}>{time}</option>
						))}
					</select>
				</div>
				<button type="submit" className={checkDisabled() ? 'disabled' : ''}>
					See Results!
				</button>
			</form>
			<div id="suggested-results">
				{submitted ? (
					filteredRecipes.length ? (
						<div id="chefs-choice-results">
							<div className="results-header">
								{filteredRecipes.length > 3
									? `${filteredRecipes.length} recipes matched your criteria. The chef suggests the following:`
									: `Only ${filteredRecipes.length} recipe(s) matched your critera:`}
							</div>
							<div>
								{suggestions.map((recipe, idx) => {
									return (
										<div key={idx} className="recipe-display">
											<Link to={`/user/recipes/${recipe.id}`}>
												<h2 className="suggested-recipe-name">{recipe.name}</h2>
												<img src={recipe.img} alt="recipe" />
											</Link>
											<div className="recipe-details">
												<span>{`Cook Time: ${recipe.cookTime} mins, Servings: ${recipe.servings}`}</span>
											</div>
											<details>
												<summary> Ingredients: </summary>
												<ul>
													{recipe.lineItems.map((ingredient) => (
														<li key={ingredient.id}>
															{capitalize(ingredient.ingredient.name)}
														</li>
													))}
												</ul>
											</details>
										</div>
									);
								})}
							</div>
							{insufficentServings ? (
								<div className="insufficient-servings">
									We apologize, the chef is unable to accomodate your total
									number of desired meals that match your criteria.
								</div>
							) : (
								<></>
							)}
							{suggestions.length ? (
								<button onClick={addToCartClickHandler}>Add All to List</button>
							) : (
								<></>
							)}
						</div>
					) : (
						<div className="results-header">
							Sorry, no recipes matched your criteria
						</div>
					)
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ChefsChoice;
