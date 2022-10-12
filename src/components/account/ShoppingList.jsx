import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
	fetchRemoveFromShoppingList,
	fetchShoppingList,
	getListStatus,
} from '../../features/shoppingList/shoppingListSlice';
import AmazonFreshForm from '../amazon/AmazonFreshForm';

const ShoppingList = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const shoppingList = useSelector(
		(state) => state.shoppingList.shoppingList.recipes
	);
	const listStatus = useSelector(getListStatus);

	const handleCheckAll = (event) => {
		const checkAll = document.querySelectorAll(
			`input[name="${event.target.value}"]`
		);

		checkAll.forEach((input) => {
			input.checked = event.target.checked;
			input.checked
				? input.parentNode.classList.add('have-item')
				: input.parentNode.classList.remove('have-item');
		});
	};
	const handleCheck = (event) => {
		const inputs = document.querySelectorAll(
			`input[value="${event.target.value}"]`
		);
		inputs.forEach((input) => {
			input.checked
				? input.parentNode.classList.add('have-item')
				: input.parentNode.classList.remove('have-item');
		});
	};

	const capitalize = (string) => {
		let arr = string.split(' ');
		arr = arr.map((itm) => itm[0].toUpperCase() + itm.slice(1));
		string = arr.join(' ');
		return string;
	};
	const handleRemoveRecipe = (id) => {
		console.log('handle', id);
		dispatch(fetchRemoveFromShoppingList({ id }));
	};
	React.useEffect(() => {
		dispatch(fetchShoppingList());
	}, []);
	React.useEffect(() => {}, [listStatus]);

	const inLineStyle = {
		display: `flex`,
	};

	return !shoppingList ? (
		<h1 className="loading">Loading...</h1>
	) : (
		<div className="shoppingList-container">
			<h1>
				<u>Main Shopping List</u>
			</h1>

			{shoppingList.length ? 
				<div> 
					{shoppingList.map((recipe) => {
						const ingredients = recipe.lineItems;

						return (
							<div className="recipe" key={recipe.id}>
								<div style={inLineStyle}>
									<input
										type="checkbox"
										className="recipe-checkbox"
										value={recipe.name}
										onClick={handleCheckAll}
									/>{' '}
									{capitalize(recipe.name)}{' '}
									<button
										className="remove-item-list"
										onClick={() => handleRemoveRecipe(recipe.id)}
									>
										{' '}
										&#9747;
									</button>
								</div>
								<div className="ingredients" key={ingredients.name}>
									{ingredients.map((ingredient) => {
										return (
											<div className="ingredient-checkbox" key={ingredient.id}>
												<input
													type="checkbox"
													value={ingredient.ingredient.name}
													name={recipe.name}
													onClick={handleCheck}
												/>
												{capitalize(ingredient.ingredient.name)} ({ingredient.qty}{' '}
												{capitalize(ingredient.measurement)})
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
					<div className='list-buttons'>
						<div className='mark-as-complete'>
							(List complete placeholder)
						</div>
						<div className='find-stores-nearby'>
							(Map integration placeholder)
						</div>
						<div className='order-on-amazon'>
							<AmazonFreshForm/>
						</div>
					</div>
				</div>
				: <h3>No recipes in current list</h3>
			}
		</div>
	);
};

export default ShoppingList;
