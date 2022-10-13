import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dislikes = () => {
	const dislikes = useSelector((state) => state.profile.dislikes);
	console.log("DISLIKES: ",dislikes)
	return !dislikes.length ? (
		<div className="dislikes"> No Recipes </div>
	) : (
		<div className="dislikes">
			{dislikes.map((recipe) => (
				<div key={recipe.id}>
					<Link to={`/user/recipes/${recipe.id}`}> {recipe.name}</Link>
					<details>
						<summary> Ingrediants: </summary>
						hello
					</details>
				</div>
			))}
		</div>
	);
};

export default Dislikes;
