import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
export const completeShoppingList = createAsyncThunk(
	'shoppingList/completeShoppingList',
	async ({ id }) => {
		const token = localStorage.getItem('token');
		const { data: oldList } = await axios.put(
			'/api/user/me/setCompleted',
			{ id },
			{ headers: { authorization: token } }
		);
		const { data: newList } = await axios.get('/api/user/me/currentList', {
			headers: { authorization: token },
		});
		return newList;
	}
);

const initialState = {
	shoppingList: [],
	status: 'idle',
	error: null,
	addedCount: 0,
};

const shoppingListSlice = createSlice({
	name: 'shoppingList',
	initialState,
	reducers: {
		resetShoppingList: (state) => {
			(state.shoppingList = []), (state.status = 'idle'), (state.error = null), (addedCount = 0);
		},
		resetAddedCount: (state) => {
			state.addedCount = 0;
		}
	},
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
				state.addedCount = state.addedCount + 1;
				toast.success('Added recipe to shopping list!', {
					position: 'bottom-right',
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				});
			})
			.addCase(fetchAddtoShoppingList.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
				toast.warning('Recipe already in shopping list', {
					position: 'bottom-right',
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				});
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
			})
			.addCase(completeShoppingList.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.shoppingList = action.payload;
			});
	},
});

export const { addToList, removeFromList, resetShoppingList, resetAddedCount } =
	shoppingListSlice.actions;

export const getListStatus = (state) => state.shoppingList.status;

export default shoppingListSlice.reducer;
