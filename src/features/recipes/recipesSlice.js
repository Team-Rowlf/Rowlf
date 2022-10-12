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
		const {page, cuisine, restriction, sortDirection} = params;
		const { data } = await axios.get(`/api/recipes?page=${page}&cuisine=${cuisine}&restriction=${restriction}` + (sortDirection.length ? `&sort=${sortDirection}` : ''));
		return data;
	}
);

export const fetchSingleRecipe = createAsyncThunk(
	'recipes/fetchSingleRecipe',
	async (id) => {
		const { data } = await axios.get(`/api/recipes/${id}`);
		return data;
	}
)

const initialState = {
	recipes: [],
	filterRecipes: [],
	singleRecipe: {},
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
		clearSingleRecipe: (state) => {
			state.singleRecipe = {};
		}
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
			});	
	},
});

export const getRecipeStatus = (state) => state.recipes.status;

export const { setSortRecipes, setFilterRecipes, clearSingleRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
