import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	shoppingList: [],
};

export const fetchShoppingList = createAsyncThunk(
	'shoppingList/fetchShoppingList',
	async () => {
		try {
		} catch (e) {
			console.log(e);
		}
	}
);

const shoppingListSlice = createSlice({
	name: 'shoppingList',
	initialState,
	reducers: {},
});

export default shoppingListSlice.reducer;
