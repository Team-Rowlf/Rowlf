import React, { useEffect, useState } from "react";
import Nav from "../general/Nav.jsx";
import { toast } from 'react-toastify';
import { fetchUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { clearFilteredRecipes, fetchRecipesByPage, getRecipeStatus } from "../../features/recipes/recipesSlice.js";

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
				restriction: restrictionFilter
			}))
        }
        return () => {
            dispatch(clearFilteredRecipes())
        }
    },[user.isAdmin, page, cuisineFilter, restrictionFilter]);

    const handleCuisineFilterChange = (event) => {
        setCuisineFilter(event.target.value)
    }
    const handleRestrictionFilterChange = (event) => {
        setRestrictionFilter(event.target.value)
    }

    return (
        recipeStatus === 'succeeded' ?
            <div className="all-recipes-container">
                <Nav />
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
                            <select defaultValue={restrictionFilter} id='cuisine-selector'  onChange={handleRestrictionFilterChange}>
                            {restrictions.map((ele, index) => (
								<option value={ele} key={index}>
									{ele[0].toUpperCase() + ele.slice(1)}
								</option>
							))}
                            </select>
                        </div>
                        <div className='display-info'>
                            <div className='display-text'>Displaying 25 recipes per page:</div>
                            <div className="prev-next">
                            <Link to={`/adminportal/allrecipes?page=${Number(page)-1}`} className={Number(page) === 1 ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page-1)}>Prev</Link>
                            <Link to={`/adminportal/allrecipes?page=${Number(page)+1}`} className={page*25 >= recipeCount ? 'prevNext disabled' : 'prevNext'} onClick={() => setPage(+page+1)}>Next</Link>
                            </div>
                        </div>
                    </div>
                    {recipes.length ?
                        <table id="all-recipes-table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Recipe Url</th>
                                <th>Image Url</th>
                                <th>Cuisines</th>
                                <th>Restrictions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recipes.map((recipe, idx) => {
                                return (
                                <tr key={idx}>
                                    <td>
                                    <Link className="recipe-id-link" to={`/adminportal/updaterecipe/${recipe.id}`}>
                                        {recipe.id}
                                    </Link>
                                    </td>
                                    <td>{recipe.name}</td>
                                    <td className="recipe-url">{recipe.url}</td>
                                    <td className="recipe-url">{recipe.img}</td>
                                    <td>{recipe.cuisines.length ? recipe.cuisines.map(cuisine => cuisine.name.toUpperCase()).join(', ') : 'NO CUISINES'}</td>
                                    <td>{recipe.restrictions.length ? recipe.restrictions.map(restriction => restriction.name.toUpperCase()).join(', ') : 'NO RESTRICIONS'}</td>
                                </tr>
                                );
                            })}
                            </tbody>
                        </table>
                        : <h3 className="no-recipes-message">No recipes to display</h3>
                    }
                    {/* add in table here */}
                </div>
            : <h1 className="loading">Loading...</h1>
    )
};

export default AllRecipesAdminPage;