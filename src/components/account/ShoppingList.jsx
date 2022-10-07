import React from 'react';
import { useSelector } from 'react-redux';

const ShoppingList = () => {

	let shoppingList = [
		{
			name: 'Recipe 1',
			lineItems:
			[
				{
					ingredients:
					[
						{name:'Ingredient 1', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 2', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 3', quantity:1, measurement: 'tbsp'},
						{name:'Ingredient 4', quantity: 1, measurement: 'tbsp'}
					]
				}
			]
		},
		{
			name: 'Recipe 2',
			 lineItems:
			 [
				{
					ingredients:
					[
						{name:'Ingredient 1', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 2', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 3', quantity:1, measurement: 'tbsp'},
						{name:'Ingredient 4', quantity: 1, measurement: 'tbsp'}
					]
				}
			]
		},
		{
			name: 'Recipe 3', 
			lineItems:
			[
				{
					ingredients:
					[
						{name:'Ingredient 1', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 2', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 3', quantity:1, measurement: 'tbsp'},
						{name:'Ingredient 4', quantity: 1, measurement: 'tbsp'}
					]
				}
			]
		},
		{
			name: 'Recipe 4', 
			lineItems:
			[
				{
					ingredients:
					[
						{name:'Ingredient 1', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 2', quantity: 1, measurement: 'tbsp'},
						{name:'Ingredient 3', quantity:1, measurement: 'tbsp'},
						{name:'Ingredient 4', quantity: 1, measurement: 'tbsp'}
					]
				}
			]
		}
	]

	return (
		<div className="shoppingList-container">
			<h1>
				<u>Main Shopping List</u>
			</h1>

			{shoppingList.map(recipe=>{
					const ingredients = recipe.lineItems
					console.log('INGREDIENTS: ',ingredients)
					return(
						<div className="recipe" key={recipe.name}>
							<input type="checkbox" className="recipe-checkbox" value="Recipe1.name"/> {recipe.name}
							<div className="ingredients" key={ingredients.name}>
								{ingredients.map(ingredient=>{
									return(
										<div className="ingredient-checkbox" key={ingredient.name}>
											<input type="checkbox" value={ingredient.ingredients.name}/> (x{ingredient.ingredients.quantity} {ingredient.ingredients.measurement}) {ingredient.ingredients.name}
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
		</div>
	);
};

export default ShoppingList;
