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
	addToList,
	fetchAddtoShoppingList,
} from '../../features/shoppingList/shoppingListSlice';
import { getUserToken } from '../../features/user/userSlice';

const RecipePage = () => {
	const dispatch = useDispatch();
	const { recipeId } = useParams();
	const token = useSelector(getUserToken);

	const getUserLikesId = useSelector(getAllLikesId);
	const getUserDisLikesId = useSelector(getAllDislikesId);

	React.useEffect(() => {
		(getUserLikesId.includes(Number(recipeId)) &&
			document
				.querySelector(`button[value="like"]`)
				.classList.add('like-recipe')) ||
			(getUserDisLikesId.includes(Number(recipeId)) &&
				document
					.querySelector(`button[value="dislike"]`)
					.classList.add('dislike-recipe'));
	}, [getUserLikesId, getUserDisLikesId]);

	const recipes = useSelector((state) => state.recipes.recipes);
	const recipe = recipes.filter((recipe) => recipe.id === Number(recipeId));

	const handlePreference = (prop) => (event) => {
		const like = document.querySelector(`button[value="like"]`);
		const dislike = document.querySelector(`button[value="dislike"]`);

		// if you like it check if the button has a certain class to add/remove class and dispatch to add/remove database then check if opposite is present

		if (prop === `like`) {
			like.classList.contains('like-recipe')
				? dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId })) &&
				  like.classList.remove('like-recipe')
				: dislike.classList.contains('dislike-recipe')
				? dispatch(userLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  dispatch(
						userDisLikeRecipe({ token, action: 'remove', id: recipeId })
				  ) &&
				  like.classList.add('like-recipe') &&
				  dislike.classList.remove('dislike-recipe')
				: dispatch(userLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  like.classList.add('like-recipe');
		} else {
			dislike.classList.contains('dislike-recipe')
				? dispatch(
						userDisLikeRecipe({ token, action: 'remove', id: recipeId })
				  ) && dislike.classList.remove('dislike-recipe')
				: like.classList.contains('like-recipe')
				? dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  dispatch(userLikeRecipe({ token, action: 'remove', id: recipeId })) &&
				  like.classList.remove('like-recipe') &&
				  dislike.classList.add('dislike-recipe')
				: dispatch(userDisLikeRecipe({ token, action: 'add', id: recipeId })) &&
				  dislike.classList.add('dislike-recipe');
		}
		dispatch(getUserLikes({ token }));
		dispatch(getUserDisLikes({ token }));
	};

	const handleCart = (event) => {
		dispatch(fetchAddtoShoppingList({ id: Number(recipeId) }));
	};

	const handleInstructions = (event) => {
		window.open(recipe[0].url, '_blank')
	};

	const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
		string = arr.join(' ');
		return string;
	};

	return !recipe.length ? (
		<h1 className="loading">LOADING...</h1>
	) : (
		<div className="recipe-page">
			<div className="recipe-container">
				<h1>{recipe[0].name}</h1>
				<img src={recipe[0].img} alt="dish" />
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
					{recipe[0].lineItems.map((item) => (
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
