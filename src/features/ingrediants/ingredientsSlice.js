import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	ingredients: [],
};

export const fetchIngredients = createAsyncThunk(
	'ingredients/fetchIngredients',
	async () => {
		try {
		} catch (e) {
			console.log(e);
		}
	}
);

const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState,
	reducers: {},
});

export default ingredientsSlice.reducer;
