import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Likes = () => {
	const likes = useSelector((state) => state.profile.likes);
	let likedRecipes = [];
	const recipes = useSelector(state=>state.recipes.recipes)
	

	likes.map(liked=>{
		recipes.map(itm=>{
			if(itm.id == liked.id){
				likedRecipes.push(itm);
			}
		})
	})

	const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
		string = arr.join(' ');
		return string;
	};

	return !likes.length ? (
		<div className="dislikes"> 
			<h2>
				No Liked Recipes 
			</h2>
		</div>
	) : (
		<div className="likes">
			{likedRecipes.map((recipe) => (
				<div key={recipe.id}>
					<Link to={`/user/recipes/${recipe.id}`}> {recipe.name}</Link>
					<details>
						<summary> Ingredients: </summary>
						<ul>
							{recipe.lineItems.map(ingredient=><li key={ingredient.id}>{capitalize(ingredient.ingredient.name)}</li>)}
						</ul>
					</details>
				</div>
			))}
		</div>
	);
};

export default Likes;
