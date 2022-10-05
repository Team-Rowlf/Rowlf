import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	profile: {},
};

export const fetchProfile = createAsyncThunk(
	'profile/fetchProfile',
	async () => {}
);

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
});

export default profileSlice.reducer;
