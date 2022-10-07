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
		'loading...'
	) : (
		<>
			<div>
				<img src={recipe[0].img} alt="" />
				<p>{recipe[0].name}</p>
				<ul>
					<p> Ingredients: </p>
					{recipe[0].lineItems.map((item) => (
						<li key={item.id}>
							{item.ingredient.name}{' '}
							<span>
								{' '}
								({item.qty} {item.measurement})
							</span>
						</li>
					))}
				</ul>
			</div>
			<div>
				<button className="navButton" value="like" onClick={handlePreference}>
					{' '}
					Like{' '}
				</button>
				<button
					className="navButton"
					value="dislike"
					onClick={handlePreference}
				>
					{' '}
					Dislike{' '}
				</button>
				<button className="navButton" onClick={handleCart}>
					{' '}
					Add To Card{' '}
				</button>
			</div>
		</>
	);
};

export default RecipePage;
