import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	shoppingList: [],
};

export const fetchShoppingList = createAsyncThunk(
	'shoppingList/fetchShoppingList',
	async () => {}
);

const shoppingListSlice = createSlice({
	name: 'shoppingList',
	initialState,
	reducers: {},
});

export default shoppingListSlice.reducer;
