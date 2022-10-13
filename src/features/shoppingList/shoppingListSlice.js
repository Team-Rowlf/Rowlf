import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import Toastify from 'toastify-js';

export const fetchShoppingList = createAsyncThunk(
	'shoppingList/fetchShoppingList',
	async () => {
		const token = localStorage.getItem('token');
		const { data } = await axios.get('/api/user/me/currentList', {
			headers: { authorization: token },
		});
		return data;
	}
);

export const fetchAddtoShoppingList = createAsyncThunk(
	'shoppingList/fetchAddtoShoppingList',
	async ({ id }) => {
		const token = localStorage.getItem('token');
		const { data } = await axios.put(
			`/api/user/me/addRecipe`,
			{ id },
			{ headers: { authorization: token } }
		);
		return data;
	}
);
export const fetchRemoveFromShoppingList = createAsyncThunk(
	'shoppingList/fetchRemoveFromShoppingList',
	async ({ id }) => {
		const token = localStorage.getItem('token');

		const { data } = await axios.put(
			`/api/user/me/removeRecipe`,
			{ id },
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const initialState = {
	shoppingList: [],
	status: 'idle',
	error: null,
};

const shoppingListSlice = createSlice({
	name: 'shoppingList',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchShoppingList.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchShoppingList.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.shoppingList = action.payload;
			})
			.addCase(fetchShoppingList.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(fetchAddtoShoppingList.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchAddtoShoppingList.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.shoppingList = action.payload;
				toast.success("Added recipe to shopping list!", {
					position: 'bottom-right',
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
			})
			.addCase(fetchAddtoShoppingList.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
				toast.warning("Recipe already in shopping list", {
					position: 'bottom-right',
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				})
			})
			.addCase(fetchRemoveFromShoppingList.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchRemoveFromShoppingList.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.shoppingList = action.payload;
			})
			.addCase(fetchRemoveFromShoppingList.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const { addToList, removeFromList } = shoppingListSlice.actions;

export const getListStatus = (state) => state.shoppingList.status;

export default shoppingListSlice.reducer;
