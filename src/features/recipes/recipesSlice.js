import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	recipes: [],
};

export const fetchRecipes = createAsyncThunk(
	'recipes/fetchRecipes',
	async () => {}
);

const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {},
});

export default recipesSlice.reducer;
