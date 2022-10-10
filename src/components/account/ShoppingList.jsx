import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingList = () => {
	const shoppingList = useSelector((state) =>
		state.recipes.recipes.slice(0, 3)
	);

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
		const input = document.querySelector(
			`input[value="${event.target.value}"]`
		);

		input.checked
			? input.parentNode.classList.add('have-item')
			: input.parentNode.classList.remove('have-item');
	};

	const capitalize = string => {
		let arr  = string.split(' ');
		arr=arr.map(itm=>itm[0].toUpperCase()+itm.slice(1))
		string = arr.join(' ');
		return string;
	}

	return !shoppingList.length ? (
		<h1 className='loading'>LOADING...</h1>
	) : (
		<div className="shoppingList-container">
			<h1>
				<u>Main Shopping List</u>
			</h1>

			{shoppingList.map((recipe) => {
				const ingredients = recipe.lineItems;

				return (
					<div className="recipe" key={recipe.id}>
						<input
							type="checkbox"
							className="recipe-checkbox"
							value={recipe.name}
							onClick={handleCheckAll}
						/>{' '}
						{capitalize(recipe.name)}
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
										{capitalize(ingredient.ingredient.name)} ({ingredient.qty} {capitalize(ingredient.measurement)}) 
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShoppingList;
