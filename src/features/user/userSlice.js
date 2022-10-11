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
	formInputAvailable: { username: true, email: true },
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			window.localStorage.removeItem('token');
			state.userInfo = {};
			state.isLogged = false;
			state.isAdmin = false;
			state.token = false;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(createUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
			})
			.addCase(createUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			})
			.addCase(validateSignupForm.fulfilled, (state, action) => {
				state.status = 'succeeded';
				const field = action.payload.field;
				state.formInputAvailable[field] = action.payload.isAvailable;
			})
			.addCase(fetchUser.pending, (state, action) => {
				state.status = 'pending';
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.userInfo = action.payload;
				state.isLogged = true;
				state.token = localStorage.getItem('token');
				//check for admin
				state.isAdmin = action.payload.isAdmin;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const getFormInputAvailable = (state) => state.user.formInputAvailable;
export const isLoggedStatus = (state) => state.user.isLogged;
export const getUserToken = (state) => state.user.token;

export const { logout } = userSlice.actions;

export default userSlice.reducer;
