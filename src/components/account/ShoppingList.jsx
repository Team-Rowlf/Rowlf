import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
	completeShoppingList,
	fetchRemoveFromShoppingList,
	fetchShoppingList,
	getListStatus,
} from '../../features/shoppingList/shoppingListSlice';
import AmazonFreshForm from '../amazon/AmazonFreshForm.jsx';
import MapMain from '../googleMaps/MapMain.jsx';
import { ToastContainer } from 'react-toastify';
import { decimalToFraction } from '../../helperfunctions/fractions';
import { capitalize } from '../../helperfunctions/utils';

const ShoppingList = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const shoppingList = useSelector(
		(state) => state.shoppingList.shoppingList.recipes
	);
	const shoppingListId = useSelector(
		(state) => state.shoppingList.shoppingList.id
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

	const handleRemoveRecipe = (id) => {
		dispatch(fetchRemoveFromShoppingList({ id }));
	};
	useEffect(() => {
		dispatch(fetchShoppingList());
	}, []);
	useEffect(() => {}, [listStatus]);

	const completeListClickHandler = () => {
		dispatch(completeShoppingList({ id: shoppingListId }));
	};

	return !shoppingList ? (
		<h1 className="loading">Loading...</h1>
	) : (
		<div className="shoppingList-container">
			<h1>
				<u>Main Shopping List</u>
			</h1>

			{shoppingList.length ? (
				<div>
					{shoppingList.map((recipe) => {
						const ingredients = recipe.lineItems;

						return (
							<div className="recipe" key={recipe.id}>
								<div style={{ display: `flex` }}>
									<input
										type="checkbox"
										className="recipe-checkbox"
										value={recipe.name}
										onClick={handleCheckAll}
									/>{' '}
									<Link
										className="recipe-name-link"
										to={`/user/recipes/${recipe.id}`}
									>
										{capitalize(recipe.name)}
									</Link>{' '}
									<button
										className="remove-item-list -button"
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
												{capitalize(ingredient.ingredient.name)} (
												{ingredient.measurement.toLowerCase() !== 'to taste'
													? `${decimalToFraction(ingredient.qty)} `
													: ''}
												{capitalize(ingredient.measurement)})
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
					<div className="list-buttons">
						<div className="mark-as-complete">
							<button type="click" onClick={completeListClickHandler}>
								Mark as Complete!
							</button>
						</div>
						<div className="find-stores-nearby">
							<Link to="/map" className="stores-button-link">
								<button className="stores-button">Find Nearby Stores</button>
							</Link>
						</div>
						<div className="order-on-amazon">
							<AmazonFreshForm />
						</div>
					</div>
				</div>
			) : (
				<h3>No recipes in current list</h3>
			)}
			<ToastContainer limit={1} />
		</div>
	);
};

export default ShoppingList;
