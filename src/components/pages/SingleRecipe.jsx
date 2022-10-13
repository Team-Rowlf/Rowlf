import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	getAllDislikesId,
	getAllLikesId,
	userDisLikeRecipe,
	userLikeRecipe,
} from '../../features/profile/profileSlice';
import {
	clearSingleRecipe,
	fetchSingleRecipe,
} from '../../features/recipes/recipesSlice';
import { fetchAddtoShoppingList } from '../../features/shoppingList/shoppingListSlice';
import { getUserToken } from '../../features/user/userSlice';
import chalk from 'chalk';
import Toastify from 'toastify-js'

const RecipePage = () => {
	const dispatch = useDispatch();
	const { recipeId } = useParams();
	const token = useSelector(getUserToken);
	const recipe = useSelector((state) => state.recipes.singleRecipe);
	const getUserLikesId = useSelector(getAllLikesId);
	const getUserDisLikesId = useSelector(getAllDislikesId);

	React.useEffect(() => {
		dispatch(fetchSingleRecipe(recipeId));
		return () => dispatch(clearSingleRecipe());
	}, []);

	React.useEffect(() => {
		getUserLikesId.includes(Number(recipeId))
			? document
					.querySelector(`button[value="like"]`)
					?.classList.add('like-recipe')
			: document
					.querySelector(`button[value="like"]`)
					?.classList.remove('like-recipe');

		getUserDisLikesId.includes(Number(recipeId))
			? document
					.querySelector(`button[value="dislike"]`)
					?.classList.add('dislike-recipe')
			: document
					.querySelector(`button[value="dislike"]`)
					?.classList.remove('dislike-recipe');
	}, [getUserLikesId, getUserDisLikesId]);
		

	const handlePreference = (prop) => (event) => {
		let addLike, removeLike, addDislike, removeDislike = false;
		if (prop === 'like') {
			getUserLikesId.includes(Number(recipeId))
				? dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId }))
				: (removeLike = true) && getUserDisLikesId.includes(Number(recipeId))
				? (addLike = true) && dispatch(
						userDisLikeRecipe({ token, action: 'remove', id: recipeId })
				  ) && dispatch(userLikeRecipe({ token, action: 'add', id: recipeId }))
				: (addLike = true) && dispatch(userLikeRecipe({ token, action: 'add', id: recipeId }));
		} else {
			getUserDisLikesId.includes(Number(recipeId))
				? (removeDislike = true) && dispatch(userDisLikeRecipe({ token, action: 'remove', id: recipeId }))
				: getUserLikesId.includes(Number(recipeId))
				? (addDislike = true) && dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId })) &&
				  dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId }))
				: (addDislike = true) && dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId }));
		}
		const message = addDislike ? "Recipe added to 'Dislikes'" : (removeDislike ? "Recipe removed from 'Dislikes'" : (addLike ? "Recipe added to 'Likes'" : "Recipe removed from 'Likes'"))
		const color = (addLike || removeDislike) ? "#0D730D" : "#8B2635";
		Toastify({text: message, duration:1500, newWindow: true, gravity: "bottom", position: "right", backgroundColor: color}).showToast();
	};

	const handleCart = () => {
		dispatch(fetchAddtoShoppingList({ id: Number(recipeId) }));
	};

	const handleInstructions = () => {
		window.open(recipe.url, '_blank');
	};

	const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
		string = arr.join(' ');
		return string;
	};

	return !recipe.name ? (
		<h1 className="loading">LOADING...</h1>
	) : (
		<div className="recipe-page">
			<div className="recipe-container">
				<h1>{recipe.name}</h1>
				<img src={recipe.img} alt="dish" />
				<div className="recipe-buttons">
					<button
						className="navButton"
						value="like"
						onClick={handlePreference('like')}
					>
						Like
					</button>
					<button
						className="navButton"
						value="dislike"
						onClick={handlePreference('dislike')}
					>
						Dislike
					</button>
					<button
						className="navButton"
						value="add to list"
						onClick={handleCart}
					>
						Add To List
					</button>
					<button
						className="navButton"
						value="instructions"
						onClick={handleInstructions}
					>
						Instructions
					</button>
				</div>
				<h3>Ingredients</h3>
				<ul>
					{recipe.lineItems.map((item) => (
						<li key={item.id}>
							{capitalize(item.ingredient.name)} ({item.qty}{' '}
							{capitalize(item.measurement)})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RecipePage;
