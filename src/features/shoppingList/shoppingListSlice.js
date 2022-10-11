import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShoppingList = createAsyncThunk(
	'shoppingList/fetchShoppingList',
	async () => {
		const token = localStorage.getItem('token');
		const { data: list } = await axios.get('/api/user/me/currentList', {
			headers: { authorization: token },
		});
		return list;
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
	reducers: {
		addToList: (state, action) => {
			state.shoppingList.unshift(action.payload[0]);
		},
		removeFromList: (state, action) => {
			state.shoppingList = state.shoppingList.filter(
				(item) => item.id !== action.payload.id
			);
		},
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
			});
	},
});

export const { addToList, removeFromList } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
