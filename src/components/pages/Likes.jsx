import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Likes = () => {
	const likes = useSelector((state) => state.profile.likes);
	const likedRecipes = [];
	let recipe = [];
	const recipes = useSelector(state=>state.recipes)
	

	likes.map(liked=>{
		
		console.log("RECIPE: ", recipe)
	})

	console.log("LIKES: ",likes)

	return !likes.length ? (
		<div className="likes"> No Recipes </div>
	) : (
		<div className="likes">
			{likes.map((recipe) => (
				<div key={recipe.id}>
					<Link to={`/user/recipes/${recipe.id}`}> {recipe.name}</Link>
					<details>
						<summary> Ingredients: </summary>
						{/* <ul>
							{recipe.ingredients.map(ingredient=><ul>ingredient.name</ul>)}
						</ul> */}
					</details>
				</div>
			))}
		</div>
	);
};

export default Likes;
