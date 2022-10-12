import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getRecipeStatus,
	fetchFilteredRecipes,
} from '../../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const Recipes = () => {
	const dispatch = useDispatch();
	const recipes = useSelector((state) => state.recipes.recipes);
	const filteredRecipes = useSelector((state) => state.recipes.filterRecipes);
	const recipeStatus = useSelector(getRecipeStatus);
	const [cuisineFilter, setCuisineFilter] = useState('all');
	const [restrictionFilter, setRestrictionFilter] = useState('all');
	const [sortDirection, setSortDirection] = useState('');
	const [page, setPage] = useState(1);
	const [list, setList] = useState(recipes.slice(0, 25));

	const cuisines = [
		'all',
		'american',
		'asian',
		'mexican',
		'pasta',
		'mediterranean',
		'salad',
		'soup',
		'fusion',
		'healthy',
		'other',
	];

	const restrictions = [
		'all',
		'vegetarian',
		'vegan',
		'glutan-free',
		'nut-free',
		'lactose-free',
		'pescatarian',
	];

	// useEffect(() => {
	// 	if (page) {
	// 		setList(
	// 			dispatch(
	// 				fetchRecipesByPage({
	// 					page: page,
	// 					cuisine: cuisineFilter,
	// 					restriction: restrictionFilter,
	// 					sortDirection: sortDirection,
	// 				})
	// 			)
	// 			);
	// 			console.log('LIST1: ', list)
	// 		// setList(list=>[recipes.slice(0,25)])
	// 	} else {
	// 		setList(dispatch(fetchRecipes()));
	// 		console.log('LIST2: ', list)
	// 		// setList(list=>[recipes.slice(0,25)])
	// 	}
	// }, [page]);

	// useEffect(() => {
	// if (Number(page) !== 1) {
	// 	navigate('/user/recipes?page=1');
	// 	setPage(1);
	// } else {
	// dispatch(
	// 	fetchRecipesByPage({
	// 		page: page,
	// 		cuisine: cuisineFilter,
	// 		restriction: restrictionFilter,
	// 		sortDirection: sortDirection,
	// 	})
	// 	);
	// 	setList(list=>[recipes.slice(0,25)])
	// }
	// }, [cuisineFilter, restrictionFilter, sortDirection]);

	const handlefilter = (prop) => (event) => {
		if (prop === 'cuisines') setCuisineFilter(event.target.value);
		if (prop === 'restrictions') setRestrictionFilter(event.target.value);
	};
	const handleSort = (event) => {
		setSortDirection(event.target.value);
	};

	// in the future, could have a different formula for recipe of the day; highest rated would be recipe of the day, rolling basis or something

	//handle scroll for infinite scrolling
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setList(recipes.slice(0, 25 * Number(page)));
	}, [page]);

	function handleScroll() {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.documentElement.offsetHeight
		)
			return;
		setPage((page) => page + 1);
	}

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	let id = (day * month) % recipes.length;
	let rotd = recipes[id];

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
							<div className="recipe">
								<h3>{recipe.name}</h3>
								<p>Serving Size: {recipe.servings} </p>
								<img src={recipe.img} alt="recipe" />
							</div>
						</Link>
					))
				) : (
					<h2>No Matches</h2>
				)}
			</div>
		</div>
	);
};

export default Recipes;
