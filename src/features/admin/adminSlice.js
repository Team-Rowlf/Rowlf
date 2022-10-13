import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('admin/fetchAllUsers', 
    async (params) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const { page, sortByLastName } = params;
            // may later want different sort options
            const { data } = await axios.get('/api/user/all' + (page ? `?page=${page}` : '') + (sortByLastName ? `&sort=true` : ''), {
                headers: { authorization: token },
            });
            return data;
        }
});

const initialState = {
    allUsers: [],
    numUsers: NaN,
    status: 'idle',
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        clearAllUsersState: (state) => {
            state.allUsers = [];
            state.status = 'idle';
            state.numUsers = NaN;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllUsers.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allUsers = action.payload.rows;
                state.numUsers = action.payload.count;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.status = 'failed';
            })
    }
})

export const { clearAllUsersState } = adminSlice.actions;

export default adminSlice.reducer;