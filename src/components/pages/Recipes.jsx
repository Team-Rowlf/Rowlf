import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getRecipeStatus,
	setSortRecipes,
	setFilterRecipes,
} from '../../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const Recipes = () => {
	const dispatch = useDispatch();
	const recipes = useSelector((state) => state.recipes.recipes);
	const filterRecipes = useSelector((state) => state.recipes.filterRecipes);
	const recipeStatus = useSelector(getRecipeStatus);
	const [filter, setFilter] = React.useState({
		cuisines: 'all',
		restrictions: 'all',
	});
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
	const restrictions = [
		'vegetarian',
		'vegan',
		'glutan-free',
		'nut-free',
		'lactose-free',
		'pescatarian',
	];

	React.useEffect(() => {
		dispatch(setFilterRecipes());
	}, [recipeStatus]);

	React.useEffect(() => {
		dispatch(setFilterRecipes(filter));
	}, [filter]);

	const handlefilter = (prop) => (event) => {
		setFilter({ ...filter, [prop]: event.target.value });
	};
	const handleSort = (event) => {
		dispatch(setSortRecipes(event.target.value));
	};

	return !recipes.length ? (
		'loading...'
	) : (
		// "recipe-container" flex column
		// "rotd&filter"      flex row side by side like the wireframe example
		// "recipes-list"     flex however below the rotd&filter

		<div className="recipe-container">
			<div className="rotd&filter">
				<div className="recipe-of-the-day">
					{recipes.slice(0, 1).map((recipe) => (
						<div key={recipe.id}>
							<img src={recipe.img} alt="recipe" />
							<Link to={`${recipe.id}`}>
								<p>{recipe.name}</p>
							</Link>
							<span> Size: {recipe.servings} </span>
						</div>
					))}
				</div>
				<div className="filter-recipe">
					<label htmlFor="filter-serving-size"> Serving Size</label>
					<select name="filter-serving-size" onChange={handleSort}>
						<option value="ASCENDING"> ASCENDING </option>
						<option value="DECENDING"> DECENDING </option>
					</select>
					<label htmlFor="filter-cuisines"> Cuisines </label>
					<select
						name="filter-cuisines"
						onChange={handlefilter('cuisines')}
						defaultValue="all"
					>
						<option value="all"> All </option>
						{cuisines.map((ele, index) => (
							<option value={ele} key={index}>
								{ele}
							</option>
						))}
					</select>
					<label htmlFor="filter-diet"> Diet </label>
					<select
						name="filter-diet"
						onChange={handlefilter('restrictions')}
						defaultValue="all"
					>
						<option value="all"> All </option>
						{restrictions.map((ele, index) => (
							<option value={ele} key={index}>
								{ele}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="recipes-list">
				{filterRecipes.nomatch ? (
					<p>{filterRecipes.nomatch}</p>
				) : (
					filterRecipes.slice(1, 12).map((recipe) => (
						<div key={recipe.id} className="recipe">
							<img src={recipe.img} alt="recipe" />
							<Link to={`${recipe.id}`}>
								<p>{recipe.name}</p>
							</Link>
							<span> Size: {recipe.servings} </span>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Recipes;
