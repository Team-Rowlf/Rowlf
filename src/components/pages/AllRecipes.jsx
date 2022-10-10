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
		<h1 className='loading'>LOADING...</h1>
	) : (
		// "recipe-container" flex column
		// "rotd&filter"      flex row side by side like the wireframe example
		// "recipes-list"     flex however below the rotd&filter

		<div className="recipe-container">
			<div className="rotd&filter">
				<div className="rotd">
					{recipes.slice(0, 1).map((recipe) => (
						<div key={recipe.id} className="rotd-container">
							<h1 className="rotd-title">Recipe of the Day</h1>
								<div className="img">
									<Link to={`${recipe.id}`}>
										<img src={recipe.img} alt="recipe" />
										<h2>{recipe.name}</h2>
										<p> Serving Size: {recipe.servings} </p>
									</Link>
								</div>
						</div>
					))}
				</div>
				<div className="filter-title">
					<h3>Filters:</h3>
				</div><br/>
				<div className="filter-recipe">
					<div className="filter">
						<select name="filter-serving-size" onChange={handleSort}>
							<option value="" selected disabled>Serving Size</option>
							<option value="ascending"> Ascending </option>
							<option value="descending"> Descending </option>
						</select>
					</div>
					<div className="filter">
						<select
							name="filter-cuisines"
							onChange={handlefilter('cuisines')}
							defaultValue="all"
						>
							<option value="all" selected disabled> Cuisine </option>
							{cuisines.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase()+ele.slice(1)}
								</option>
							))}
						</select>
					</div>
					<div className="filter">
						<select
							name="filter-diet"
							onChange={handlefilter('restrictions')}
							defaultValue="all"
							>
							<option value="all" selected disabled> Diet </option>
							{restrictions.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase()+ele.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div className="recipes-list">
				{filterRecipes.nomatch ? (
					<p>{filterRecipes.nomatch}</p>
				) : (
					filterRecipes.slice(1, 25).map((recipe) => (
						<Link to={`${recipe.id}`}>
							<div key={recipe.id} className="recipe">
								<h3>{recipe.name}</h3>
								<p>Serving Size: {recipe.servings} </p>
								<img src={recipe.img} alt="recipe" />
							</div>
						</Link>
					))
				)}
			</div>
		</div>
	);
};

export default Recipes;
