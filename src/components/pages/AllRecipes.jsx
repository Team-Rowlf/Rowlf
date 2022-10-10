import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	getRecipeStatus,
	setSortRecipes,
	setFilterRecipes,
	fetchRecipesByPage,
	fetchRecipes,
} from '../../features/recipes/recipesSlice';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// after pagination implemented, then work on moving filtering to the backend as well

const Recipes = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const recipes = useSelector((state) => state.recipes.recipes);
	const recipeCount = useSelector((state) => state.recipes.count);
	const filterRecipes = useSelector((state) => state.recipes.filterRecipes);
	const recipeStatus = useSelector(getRecipeStatus);
	const [searchParams, setSearchParams] = useSearchParams()
	const [page, setPage] = useState(searchParams.get('page'))
	const [filter, setFilter] = React.useState({
		cuisines: 'all',
		restrictions: 'all',
	});
	const [cuisineFilter, setCuisineFilter] = useState('all')
	const [restrictionFilter, setRestrictionFilter] = useState('all')
	const [sortDirection, setSortDirection] = useState('')
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

	// want to try to move filtering into backend; will mesh better with paginating
	React.useEffect(() => {
		if (page) {
			dispatch(fetchRecipesByPage({page: page, cuisine: cuisineFilter, restriction: restrictionFilter})) 
		} else {
			dispatch(fetchRecipes());
		}
	},[page])


	React.useEffect(() => {
		dispatch(setFilterRecipes());
	}, [recipeStatus]);

	React.useEffect(() => {
		if (Number(page) !== 1) {
			navigate('/user/recipes?page=1')
			setPage(1)
		} else {
			dispatch(fetchRecipesByPage({page: page, cuisine: cuisineFilter, restriction: restrictionFilter}))
		}
	}, [filter, cuisineFilter, restrictionFilter]);

	const handlefilter = (prop) => (event) => {
		setFilter({ ...filter, [prop]: event.target.value });
		if (prop === 'cuisines') setCuisineFilter(event.target.value)
		if (prop === 'restrictions') setRestrictionFilter(event.target.value)
	};
	const handleSort = (event) => {
		setSortDirection(event.target.value)
	};

	const showRecipeOfDay = () => {
		return !(cuisineFilter !== 'all' || restrictionFilter !== 'all' || Number(page) !== 1)
	}

	// will want a different way to get recipe of the day; maybe some random variable generator or formula?
	// possible, simple way: convert date into an int somehow, then take modulus of total recipe count. then that will be recipe id for recipe of the day
	// in the future, could have a better system if incorporated a rating system; highest rated would be recipe of the day, rolling basis or something
	return recipeStatus === 'pending' ? (
		<h1 className='loading'>LOADING...</h1>
	) : (
		// "recipe-container" flex column
		// "rotd&filter"      flex row side by side like the wireframe example
		// "recipes-list"     flex however below the rotd&filter

		<div className="recipe-container">
			<div className="rotd&filter">
				<div className="rotd">
					{/* having only show recipe of the day if not filtering */}
					{showRecipeOfDay() ? recipes.slice(0, 1).map((recipe) => (
						<div key={recipe.id} className="rotd-container">
							<h1 className="rotd-title">Recipe of the Day</h1>
								<div className="img">
									<Link to={`${recipe.id}`}>
										<img src={recipe.img} alt="recipe" />
										<h2>{recipe.name}</h2>
										<p> Serving Size: {recipe.servings} </p>
									</Link>
								</div>
						</div>
					))
					: <></>
					}
				</div>
				<div className="filter-title">
					<h3>Filters:</h3>
				</div><br/>
				<div className="filter-recipe">
					<div className="filter">
						<select name="filter-serving-size" onChange={handleSort} defaultValue={sortDirection}>
							<option value="" disabled>Serving Size</option>
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
							<option value="all" disabled> Cuisine </option>
							{cuisines.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase()+ele.slice(1)}
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
							<option value="all" disabled> Diet </option>
							{restrictions.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase()+ele.slice(1)}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div className="recipes-list">
				{/* {filterRecipes.nomatch ? (
					<p>{filterRecipes.nomatch}</p>
				) : (
					filterRecipes.slice(1, 25).map((recipe) => (
						<Link key={recipe.id} to={`${recipe.id}`}>
							<div className="recipe">
								<h3>{recipe.name}</h3>
								<p>Serving Size: {recipe.servings} </p>
								<img src={recipe.img} alt="recipe" />
							</div>
						</Link>
					))
				)} */}
				{recipes.length ? recipes.map((recipe) => (
					<Link key={recipe.id} to={`${recipe.id}`}>
						<div className="recipe">
							<h3>{recipe.name}</h3>
							<p>Serving Size: {recipe.servings} </p>
							<img src={recipe.img} alt="recipe" />
						</div>
					</Link>
				))
				: <p>No Matches</p>}
			</div>
			<div className="prev-next-links">
				<Link to={`/user/recipes?page=${Number(page)-1}`} className={Number(page) === 1 ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page-1)}>Prev</Link>
				<Link to={`/user/recipes?page=${Number(page)+1}`} className={(Number(page)*24 + 1) >= recipeCount ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page+1)}>Next</Link>
			</div>
		</div>
	);
};

export default Recipes;
