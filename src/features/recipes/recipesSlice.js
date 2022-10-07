import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRecipes = createAsyncThunk(
	'recipes/fetchRecipes',
	async () => {
		const { data } = await axios.get('/api/recipes');
		return data;
	}
);

const initialState = {
	recipes: [],
	status: 'idle',
	error: null,
};
const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchRecipes.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchRecipes.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.recipes = action.payload;
			})
			.addCase(fetchRecipes.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const getRecipeStatus = (state) => state.recipes.status;

export const {} = recipesSlice.actions;

export default recipesSlice.reducer;
