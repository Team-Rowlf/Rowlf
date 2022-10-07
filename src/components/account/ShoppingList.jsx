import React from 'react';

const ShoppingList = () => {

	const shoppingList = [{name: 'Recipe 1', ingredients:[{name:'Ingredient 1', quantity: 1},{name:'Ingredient 2', quantity: 1},{name:'Ingredient 3', quantity: 1},{name:'Ingredient 4', quantity: 1}]},{name: 'Recipe 2', ingredients:[{name:'Ingredient 1', quantity: 1},{name:'Ingredient 2', quantity: 1},{name:'Ingredient 3', quantity: 1},{name:'Ingredient 4', quantity: 1}]},{name: 'Recipe 3', ingredients:[{name:'Ingredient 1', quantity: 1},{name:'Ingredient 2', quantity: 1},{name:'Ingredient 3', quantity: 1},{name:'Ingredient 4', quantity: 1}]},{name: 'Recipe 4', ingredients:[{name:'Ingredient 1', quantity: 1},{name:'Ingredient 2', quantity: 1},{name:'Ingredient 3', quantity: 1},{name:'Ingredient 4', quantity: 1}]}]


	return ( shoppingList ?
		<div className="shoppingList-container">
			<h1>
				<u>Main Shopping List</u>
			</h1>

			{shoppingList.map(recipe=>{
					const ingredients = recipe.ingredients
					return(
						<div className="recipe" key={recipe.name}>
							<input type="checkbox" className="recipe-checkbox" value="Recipe1.name"/> {recipe.name}
							<div className="ingredients">
								{ingredients.map(lineItem=>{
									return(
										<div className="ingredient-checkbox" key={lineItem.ingredient.name}>
											<input type="checkbox" value={lineItem.ingredient.name}/> (x{lineItem.quantity} {lineItem.measurement}) {lineItem.ingredient.name}
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
		</div>
		: <></>
	);
};

export default ShoppingList;
