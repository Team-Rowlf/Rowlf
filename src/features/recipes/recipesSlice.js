import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk(
	'recipes/fetchRecipes',
	async () => {
		const { data } = await axios.get('/api/recipes');
		return data;
	}
);

export const fetchRecipesByPage = createAsyncThunk(
	'recipes/fetchRecipesByPage',
	async (params) => {
		const { page, cuisine, restriction, active } = params;
		const { data } = await axios.get(
			`/api/recipes?page=${page}&cuisine=${cuisine}&restriction=${restriction}` +
				(active === 'both'
					? ''
					: active === 'yes'
					? '&active=yes'
					: '&active=no')
		);
		return data;
	}
);

export const fetchFilteredRecipes = createAsyncThunk(
	'recipes/fetchFilteredRecipes',
	async (params) => {
		const { cuisine, restriction, sortDirection } = params;
		const { data } = await axios.get(
			`/api/recipes?cuisine=${cuisine}&restriction=${restriction}` +
				(sortDirection.length ? `&sort=${sortDirection}` : '')
		);
		return data;
	}
);

export const fetchSingleRecipe = createAsyncThunk(
	'recipes/fetchSingleRecipe',
	async (id) => {
		const { data } = await axios.get(`/api/recipes/${id}`);
		return data;
	}
);

// export const fetchSuggestedRecipeMatches = createAsyncThunk(
// 	'recipes/fetchSuggestedRecipeMatches',
// 	async (params) => {
// 		const token = window.localStorage.getItem('token');
// 		if (token){
// 			const {cuisines, restrictions, appliances} = params;
// 			const { data } = await axios.get('/api/recipes/suggestions' 
// 				+ (cuisines.length || restrictions.length || appliances.length ? '?' : '') 
// 				+ (cuisines.length ? cuisines.map(cuisine => `cuisine=${cuisine}`).join('&') : '')
// 				+ (restrictions.length ? (cuisines.length ? '&' : '') + restrictions.map(restriction => `restriction=${restriction}`).join('&') : '')
// 				+ (appliances.length ? (cuisines.length || restrictions.length ? '&' : '') + appliances.map(appliance => `appliance=${appliance}`).join('&') : ''),
// 				{
//                     headers: { authorization: token },
//                 });
// 			return data;
// 		}
// 	}
// )

//admin only functionality
export const attemptUpdateRecipe = createAsyncThunk(
	'recipes/attemptUpdateRecipe',
	async (params) => {
		const token = window.localStorage.getItem('token');
		if (token) {
			const { recipeDetails, cuisines, restrictions, ingredients } = params;
			const { data } = await axios.put(
				`/api/recipes/${recipeDetails.id}`,
				{
					recipeDetails,
					cuisines,
					restrictions,
					ingredients,
				},
				{
					headers: { authorization: token },
				}
			);
			return data;
		}
	}
);

const initialState = {
	recipes: [],
	filterRecipes: [],
	matchedRecipes: [], // maybe could also just use the filterRecipes array; shouldn't conflict if in different page
	singleRecipe: {},
	status: 'idle',
	error: null,
};
const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		clearSingleRecipe: (state) => {
			state.singleRecipe = {};
		},
		clearFilteredRecipes: (state) => {
			state.filterRecipes = [];
			state.count = state.recipes.length;
		},
		resetRecipes: (state) => {
			(state.recipes = []),
				(state.filterRecipes = []),
				(state.singleRecipe = {}),
				(state.status = 'idle'),
				(state.error = null);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchRecipes.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.recipes = action.payload.rows;
				state.count = action.payload.count;
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(fetchRecipesByPage.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchRecipesByPage.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.filterRecipes = action.payload.rows;
				state.count = action.payload.count;
			})
			.addCase(fetchRecipesByPage.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(fetchFilteredRecipes.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchFilteredRecipes.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.filterRecipes = action.payload.rows;
				state.count = action.payload.count;
			})
			.addCase(fetchFilteredRecipes.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(fetchSingleRecipe.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchSingleRecipe.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.singleRecipe = action.payload;
			})
			.addCase(fetchSingleRecipe.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(attemptUpdateRecipe.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(attemptUpdateRecipe.fulfilled, (state, action) => {
				state.singleRecipe = action.payload;
				state.status = 'succeeded';
			})
			.addCase(attemptUpdateRecipe.rejected, (state, action) => {
				state.status = 'failed';
			});
	},
});

export const getRecipeStatus = (state) => state.recipes.status;

export const { clearSingleRecipe, clearFilteredRecipes, resetRecipes } =
	recipesSlice.actions;

export default recipesSlice.reducer;
