import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	user: {},
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
	try {
	} catch (e) {
		console.log(e);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
