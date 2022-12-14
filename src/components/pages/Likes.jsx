import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { capitalize } from '../../helperfunctions/utils';

const Likes = () => {
	const likes = useSelector((state) => state.profile.likes);
	let likedRecipes = [];
	const recipes = useSelector((state) => state.recipes.recipes);

	if (document.getElementById('liked')) {
		document.getElementById('liked').className += ' active';
	}

	likes.map((liked) => {
		recipes.map((itm) => {
			if (itm.id == liked.id) {
				likedRecipes.push(itm);
			}
		});
	});

	return !likes.length ? (
		<div className="dislikes">
			<h2>No Liked Recipes</h2>
		</div>
	) : (
		<div className="likes">
			{likedRecipes.map((recipe) => (
				<div key={recipe.id}>
					<Link to={`/user/recipes/${recipe.id}`}>
						<div>
							<img src={recipe.img} alt="recipe" />
						</div>
						<h2>{recipe.name}</h2>
					</Link>
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
			))}
		</div>
	);
};

export default Likes;
