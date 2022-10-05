import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	ingredients: [],
};

export const fetchIngredients = createAsyncThunk(
	'ingredients/fetchIngredients',
	async () => {}
);

const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState,
	reducers: {},
});

export default ingredientsSlice.reducer;
