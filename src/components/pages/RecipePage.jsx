import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
	const dispatch = useDispatch();
	const { recipeId } = useParams();
	const recipes = useSelector((state) => state.recipes.recipes);
	const recipe = recipes.filter((recipe) => recipe.id === Number(recipeId));

	const handlePreference = (event) => {
		console.log(event.target.value);
	};
	const handleCart = (event) => {
		console.log(event.target.value);
	};

	return !recipe.length ? (
		<h1 className='loading'>LOADING...</h1>
	) : (
		<div className='recipe-page'>
			<div className='recipe-container'>
				<h1>{recipe[0].name}</h1>
				<img src={recipe[0].img} alt="dish" />
				<div className='recipe-buttons'>
					<button className="navButton" value="like" onClick={handlePreference}>
						Like
					</button>
					<button
						className="navButton"
						value="dislike"
						onClick={handlePreference}
					>
						Dislike
					</button>
					<button 
						className="navButton" 
						value="add to card"					
						onClick={handleCart}
					>
						Add To Card
					</button>
				</div>
				<h3>Ingredients</h3>
				<ul>
					{recipe[0].lineItems.map((item) => (
						<li key={item.id}>({item.qty}) {item.measurement} {item.ingredient.name} </li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RecipePage;
