import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	getAllDislikesId,
	getAllLikesId,
	getUserDisLikes,
	getUserLikes,
	userDisLikeRecipe,
	userLikeRecipe,
} from '../../features/profile/profileSlice';
import {
<<<<<<< HEAD
	fetchAddtoShoppingList,
	getListStatus
} from '../../features/shoppingList/shoppingListSlice';
import { getUserToken } from '../../features/user/userSlice';
import Toastify from 'toastify-js'
=======
	clearSingleRecipe,
	fetchSingleRecipe,
} from '../../features/recipes/recipesSlice';
import { fetchAddtoShoppingList } from '../../features/shoppingList/shoppingListSlice';
import { getUserToken } from '../../features/user/userSlice';
import chalk from 'chalk';
>>>>>>> refs/rewritten/onto

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
<<<<<<< HEAD
		if (recipe.id) {
			(getUserLikesId.includes(Number(recipeId)) &&
			document
				.querySelector(`button[value="like"]`)
				.classList.add('like-recipe')) ||
			(getUserDisLikesId.includes(Number(recipeId)) &&
				document
					.querySelector(`button[value="dislike"]`)
					.classList.add('dislike-recipe'));
		}
	}, [getUserLikesId, getUserDisLikesId]);

	const handlePreference = (prop) => async (event) => {
		const like = document.querySelector(`button[value="like"]`);
		const dislike = document.querySelector(`button[value="dislike"]`);

		// if you like it check if the button has a certain class to add/remove class and dispatch to add/remove database then check if opposite is present
		let addLike, removeLike, addDislike, removeDislike = false;

		if (prop === `like`) {
			like.classList.contains('like-recipe')
				? (removeLike=true) && dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId })) &&
				  like.classList.remove('like-recipe') 
				: dislike.classList.contains('dislike-recipe')
				? (addLike=true) && dispatch(userLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  dispatch(
						userDisLikeRecipe({ token, action: 'remove', id: recipeId })
				  ) &&
				  like.classList.add('like-recipe') &&
				  dislike.classList.remove('dislike-recipe')
				: (addLike=true) && dispatch(userLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  like.classList.add('like-recipe');
			// if (like.className.includes('like-recipe')) {
			// 	like.className = 'navButton'
			// 	 dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId }));
			// 	removeLike = true;
			// 	console.log(like.classList, like.className)
			// } else {
			// 	addLike = true;
			// 	like.classList.add('like-recipe');
			// 	if (dislike.classList.contains('dislike-recipe')) {
			// 		dislike.className = 'navButton'
			// 		 dispatch(userDisLikeRecipe({ token, action: 'remove', id: recipeId }));
			// 	}
			// 	 dispatch(userLikeRecipe({ token, action: 'add', id: recipeId }));
			// }
		} else {
			dislike.classList.contains('dislike-recipe')
				? (removeDislike=true) && dispatch(
						userDisLikeRecipe({ token, action: 'remove', id: recipeId })
				  ) && dislike.classList.remove('dislike-recipe')
				: like.classList.contains('like-recipe')
				? (addDislike=true) && dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId })) &&
				  like.classList.remove('like-recipe') &&
				  dislike.classList.add('dislike-recipe')
				: (addDislike=true) && dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  dislike.classList.add('dislike-recipe')
		}
		const message = addDislike ? "Recipe added to 'Dislikes'" : (removeDislike ? "Recipe removed from 'Dislikes'" : (addLike ? "Recipe added to 'Likes'" : "Recipe removed from 'Likes'"))
		Toastify({text: message, duration:1500, newWindow: true, gravity: "bottom", position: "right", backgroundColor: "#8B2635"}).showToast();
		dispatch(getUserLikes({ token }));
		dispatch(getUserDisLikes({ token }));
=======
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
		if (prop === 'like') {
			getUserLikesId.includes(Number(recipeId))
				? dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId }))
				: getUserDisLikesId.includes(Number(recipeId))
				? dispatch(
						userDisLikeRecipe({ token, action: 'remove', id: recipeId })
				  ) && dispatch(userLikeRecipe({ token, action: 'add', id: recipeId }))
				: dispatch(userLikeRecipe({ token, action: 'add', id: recipeId }));
		} else {
			getUserDisLikesId.includes(Number(recipeId))
				? dispatch(userDisLikeRecipe({ token, action: 'remove', id: recipeId }))
				: getUserLikesId.includes(Number(recipeId))
				? dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId })) &&
				  dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId }))
				: dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId }));
		}
>>>>>>> refs/rewritten/onto
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
