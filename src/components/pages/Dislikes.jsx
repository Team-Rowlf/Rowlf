import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dislikes = () => {
	const dislikes = useSelector((state) => state.profile.dislikes);
	let dislikedRecipes = [];
	const recipes = useSelector(state=>state.recipes.recipes)
	

	dislikes.map(liked=>{
		recipes.map(itm=>{
			if(itm.id == liked.id){
				dislikedRecipes.push(itm);
			}
		})
	})

	const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
		string = arr.join(' ');
		return string;
	};

	return !dislikes.length ? (
		<div className="dislikes"> 
			<h2>
				No Disliked Recipes 
			</h2>
		</div>
	) : (
		<div className="dislikes">
			{dislikes.map((recipe) => (
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

export default Dislikes;
