import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { fetchUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { resetFilteredRecipes, fetchRecipesByPage, getRecipeStatus } from "../../features/recipes/recipesSlice.js";

const AllRecipesAdminPage = () => {
    const user = useSelector((state) => state.user);
    const recipes = useSelector((state) => state.recipes.filterRecipes)
    const recipeCount = useSelector((state) => state.recipes.count)
    const recipeStatus = useSelector(getRecipeStatus);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [page, setPage]  = useState(searchParams.get('page'))
    const [cuisineFilter, setCuisineFilter] = useState('all');
	const [restrictionFilter, setRestrictionFilter] = useState('all');
    const [activeFilter, setActiveFiler] = useState('both');
    
    
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

    const statuses = ['both','yes','no']

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if ((user.isLogged && !user.isAdmin) || !token) {
            toast.error("Not authorized for admin portal", {
                position: 'bottom-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
            navigate('/');
        }
    },[user.isLogged]);
    
    useEffect(() => {
        dispatch(fetchUser())
        if (user.isAdmin) {
            dispatch(fetchRecipesByPage({
                page: page,
				cuisine: cuisineFilter,
				restriction: restrictionFilter,
                active: activeFilter
			}))
        }
        return () => {
            dispatch(resetFilteredRecipes())
        }
    },[user.isAdmin, page, cuisineFilter, restrictionFilter, activeFilter]);
    
    const handleCuisineFilterChange = (event) => {
        setCuisineFilter(event.target.value)
    }
    const handleRestrictionFilterChange = (event) => {
        setRestrictionFilter(event.target.value)
    }
    const handleActiveFilterChange = (event) => {
        setActiveFiler(event.target.value)
    }

    return (
        // recipes.length > 0 ?
        recipeStatus === 'succeeded' ?
            <div className="all-recipes-container">
                <div className='allrecipes-header'>
                    <h1>All Recipes ({recipeCount})</h1>
                        <div>
                            <label htmlFor='cuisine-filter'>Filter by Cuisine: </label>
                            <select defaultValue={cuisineFilter} id='cuisine-selector'  onChange={handleCuisineFilterChange}>
                            {cuisines.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase() + ele.slice(1)}
								</option>
							))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='restriction-filter'>Filter by Restriction: </label>
                            <select defaultValue={restrictionFilter} id='restriction-selector'  onChange={handleRestrictionFilterChange}>
                            {restrictions.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase() + ele.slice(1)}
								</option>
							))}
                            </select>
                        </div>
                        <div>
                        <label htmlFor='active-filter'>Filter by Active Status: </label>
                            <select defaultValue={activeFilter} id='active-selector'  onChange={handleActiveFilterChange}>
                            {statuses.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase() + ele.slice(1)}
								</option>
							))}
                            </select>
                        </div>
                        <div className='display-info'>
                            <div className='display-text'>Displaying 25 recipes per page:</div>
                            <div className="prev-next">
                            <Link to={`/admin/recipes?page=${Number(page)-1}`} className={Number(page) === 1 ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page-1)}>Prev</Link>
                            <Link to={`/admin/recipes?page=${Number(page)+1}`} className={page*25 >= recipeCount ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page+1)}>Next</Link>
                            </div>
                        </div>
                    </div>
                    {recipes.length ?
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Recipe Url</th>
                                    <th>Image Url</th>
                                    <th>Cuisines</th>
                                    <th>Restrictions</th>
                                    <th>Active?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recipes.map((recipe, idx) => {
                                    return (
                                    <tr key={idx}>
                                        <td>
                                        <Link className="recipe-id-link" to={`/admin/updaterecipe/${recipe.id}`}>
                                            {recipe.id}
                                        </Link>
                                        </td>
                                        <td className="recipe-name">{recipe.name}</td>
                                        <td className="recipe-url">{recipe.url}</td>
                                        <td className="recipe-url">{recipe.img}</td>
                                        <td>{recipe.cuisines.length ? recipe.cuisines.map(cuisine => cuisine.name.toUpperCase()).join(', ') : 'NO CUISINES'}</td>
                                        <td>{recipe.restrictions.length ? recipe.restrictions.map(restriction => restriction.name.toUpperCase()).join(', ') : 'NO RESTRICIONS'}</td>
                                        <td>{recipe.isActive ? 'YES' : 'NO'}</td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        : <h3 className="no-recipes-message">No recipes to display</h3>
                    }
                </div>
            : <h1 className="loading">Loading...</h1>
    )
};

export default AllRecipesAdminPage;