import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	async ({ loginAttempt }) => {
		return true;
		const { data: login } = axios.get('/api/user', loginAttempt);
	}
);

export const createUser = createAsyncThunk(
	'user/createUser',
	async ({ signUp }) => {
		const { data: create } = axios.post('/api/user', signUp);
		return create;
	}
);

const initialState = {
	userInfo: {},
	isLogged: false,
	isAdmin: false,
	status: 'idle',
	error: null,
	token: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(createUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
			})
			.addCase(createUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(fetchUser.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.userInfo = action.payload;
				state.isLogged = true;
				//check for admin
				state.isAdmin = action.payload.isAdmin;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export default userSlice.reducer;
