import React from 'react';
import { useSelector } from 'react-redux';
import { getRecipeStatus } from '../../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const Recipes = () => {
	const recipes = useSelector((state) => state.recipes.recipes);
	const recipeStatus = useSelector(getRecipeStatus);

	React.useEffect(() => {}, [recipeStatus]);

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
						</div>
					))}
				</div>
				<div className="filter-recipe">
					<select name="filter" id="recipe-filter">
						<option value="recipe1"> recipe1 </option>
						<option value="recipe2"> recipe2 </option>
						<option value="recipe3"> recipe3</option>
					</select>
				</div>
			</div>
			<div className="recipes-list">
				{recipes.slice(1, 12).map((recipe) => (
					<div key={recipe.id} className="recipe">
						<img src={recipe.img} alt="recipe" />
						<Link to={`${recipe.id}`}>
							<p>{recipe.name}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recipes;
