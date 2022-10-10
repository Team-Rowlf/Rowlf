import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Likes = () => {
	const likes = useSelector((state) => state.profile.likes);
	return !likes.length ? (
		<div className="likes"> No Recipes </div>
	) : (
		<div className="likes">
			{likes.map((recipe) => (
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

export default Likes;
