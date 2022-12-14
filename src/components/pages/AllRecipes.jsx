import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getRecipeStatus,
	fetchFilteredRecipes,
} from '../../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';
import { cuisines, restrictions } from '../../helperfunctions/utils';

const Recipes = () => {
	const dispatch = useDispatch();
	const recipes = useSelector((state) => state.recipes.recipes);
	const dislikeIds = useSelector((state) => state.profile.dislikes.map(recipe => recipe.id));
	const filteredRecipes = useSelector((state) => state.recipes.filterRecipes.filter(recipe => !dislikeIds.includes(recipe.id)));
	const recipeStatus = useSelector(getRecipeStatus);
	const [cuisineFilter, setCuisineFilter] = useState('all');
	const [restrictionFilter, setRestrictionFilter] = useState('all');
	const [sortDirection, setSortDirection] = useState('');
	const [page, setPage] = useState(1);
	const [list, setList] = useState(filteredRecipes.slice(0, 25));
	const [showROTD, setShowROTD] = useState(true);
	let load = undefined;
	let loading = undefined;

	useEffect(() => {
		dispatch(
			fetchFilteredRecipes({
				cuisine: cuisineFilter,
				restriction: restrictionFilter,
				sortDirection: sortDirection,
			})
		);

		setShowROTD(cuisineFilter === 'all' && restrictionFilter === 'all');
	}, [cuisineFilter, restrictionFilter, sortDirection]);

	useEffect(() => {
		if (recipeStatus === 'succeeded') setList(filteredRecipes.slice(0, 25));
	}, [recipeStatus]);

	const handlefilter = (prop) => (event) => {
		if (prop === 'cuisines') setCuisineFilter(event.target.value);
		if (prop === 'restrictions') setRestrictionFilter(event.target.value);
	};
	const handleSort = (event) => {
		setSortDirection(event.target.value);
	};

	const rotatehelper = (val, minA, maxA, minB, maxB) => {
		return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
	};

	const handleMouseMove = (event) => {
		let img = event.target;

		let mouseX = event.nativeEvent.offsetX;
		let mouseY = event.nativeEvent.offsetY;
		let rotateY = rotatehelper(mouseX, 0, 180, -15, 15);
		let rotateX = rotatehelper(mouseY, 0, 250, 15, -15);
		let brightness = rotatehelper(mouseY, 0, 250, 1.5, 0.5);

		img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		img.style.filter = `brightness(${brightness})`;
	};
	const handleMouseLeave = (event) => {
		if (event.target.lastChild.nodeName !== 'IMG') {
			event.target.parentNode.lastChild.style.transform =
				'rotateX(0deg) rotateY(0deg)';
			event.target.parentNode.lastChild.style.filter = 'brightness(1)';
		} else {
			event.target.lastChild.style.transform = 'rotateX(0deg) rotateY(0deg)';
			event.target.lastChild.style.filter = 'brightness(1)';
		}
	};

	// in the future, could have a different formula for recipe of the day; highest rated would be recipe of the day, rolling basis or something

	useEffect(() => {
		setList(filteredRecipes.slice(0, 25 * Number(page)));
	}, [page]);

	const handleLoad = () => {
		function reset() {
			load.innerHTML = 'Load More';
			load.classList.remove('fa-spin');
		}
		load = document.getElementById('load');
		loading = document.getElementById('loading');
		setPage((page) => page + 1);
		load.innerHTML = 'Loading';
		load.classList.add('fa-spin');
		setTimeout(reset, 2000);
	};

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const id = (recipes.length - 1) % (day * month);

	return recipeStatus === 'pending' ? (
		<h1 className="loading">LOADING...</h1>
	) : (
		<div className="recipe-container">
			<div className="rotd&filter">
				<div className="rotd">
					{/* having only show recipe of the day if not filtering */}
					{showROTD && recipes.length ? (
						<div key={recipes[id].id} className="rotd-container">
							<h1 className="rotd-title">Recipe of the Day</h1>
							<div className="img">
								<Link to={`${recipes[id].id}`}>
									<img src={recipes[id].img} alt="recipe" />
									<h2>{recipes[id].name}</h2>
									<p> Serving Size: {recipes[id].servings} </p>
								</Link>
							</div>
							<br />
							<p>
								Not sure what you're looking for?{' '}
								<Link className="chefs-choice-link" to="/user/chefschoice">
									Ask the chef!
								</Link>
							</p>
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="filter-title">
					<h3>Filters:</h3>
				</div>
				<br />
				<div className="filter-recipe">
					<div className="filter">
						<select
							name="filter-serving-size"
							onChange={handleSort}
							defaultValue={sortDirection}
						>
							<option value="" disabled>
								Serving Size
							</option>
							<option value="ascending"> Ascending </option>
							<option value="descending"> Descending </option>
						</select>
					</div>
					<div className="filter">
						<select
							name="filter-cuisines"
							onChange={handlefilter('cuisines')}
							defaultValue={cuisineFilter}
						>
							<option value="all" disabled>
								{' '}
								Cuisine{' '}
							</option>
							{cuisines.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase() + ele.slice(1)}
								</option>
							))}
						</select>
					</div>
					<div className="filter">
						<select
							name="filter-diet"
							onChange={handlefilter('restrictions')}
							defaultValue={restrictionFilter}
						>
							<option value="all" disabled>
								{' '}
								Diet{' '}
							</option>
							{restrictions.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase() + ele.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div className="recipes-list">
				{list.length ? (
					list.map((recipe) => (
						<Link key={recipe.id} to={`${recipe.id}`}>
							<div
								className="recipe recipes-list-hover"
								onMouseLeave={handleMouseLeave}
							>
								<h3>{recipe.name}</h3>
								<p>Serving Size: {recipe.servings} </p>
								<img
									src={recipe.img}
									alt="recipe"
									onMouseMove={handleMouseMove}
								/>
							</div>
						</Link>
					))
				) : (
					<h2>No Matches</h2>
				)}
			</div>
			<button id="load" className="button " onClick={handleLoad}>
				Load More
			</button>
		</div>
	);
};

export default Recipes;
