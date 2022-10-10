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
		const {page, cuisine, restriction} = params;
		const { data } = await axios.get(`/api/recipes?page=${page}&cuisine=${cuisine}&restriction=${restriction}`);
		return data;
	}
);

const initialState = {
	recipes: [],
	filterRecipes: [],
	status: 'idle',
	error: null,
};
const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		setFilterRecipes: (state, { payload }) => {
			state.filterRecipes = state.recipes;
			if (payload) {
				if (payload.cuisines !== 'all' && payload.restrictions !== 'all') {
					state.filterRecipes = state.filterRecipes.filter(
						(recipe) =>
							recipe.cuisines.some(
								(cuisine) => cuisine.name === payload.cuisines
							) &&
							recipe.restrictions.some(
								(restrictions) => restrictions.name === payload.restrictions
							)
					);
					!state.filterRecipes.length
						? (state.filterRecipes = { nomatch: 'No Matches' })
						: state.filterRecipes;
				}
			}
		},
		setSortRecipes: (state, action) => {
			switch (action.payload) {
				case 'ASCENDING':
					state.recipes.sort((a, b) => a.servings - b.servings);
				case 'DECENDING':
					state.recipes.sort((a, b) => b.servings - a.servings);
				default:
					state.recipes;
			}
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
				state.recipes = action.payload.rows;
				state.count = action.payload.count;
			})
			.addCase(fetchRecipesByPage.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});	
	},
});

export const getRecipeStatus = (state) => state.recipes.status;

export const { setSortRecipes, setFilterRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
