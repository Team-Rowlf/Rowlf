import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const defaultToast = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const fetchAllSuggestions = createAsyncThunk(
  'userSuggestions/fetchAllSuggestions',
  async () => {
    const token = window.localStorage.getItem('token');
    const { data } = await axios.get('/api/userSuggestions', {
      headers: { authorization: token },
    });
    return data;
  }
);

export const fetchSingleSuggestion = createAsyncThunk(
  'userSuggestions/fetchSingleSuggestion',
  async (id) => {
    console.log('fetchSingleSuggestion');
    const token = window.localStorage.getItem('token');
    const { data } = await axios.get(`/api/userSuggestions/${id}`, {
      headers: { authorization: token },
    });
    return data;
  }
);

export const fetchLoggedInUserSuggestions = createAsyncThunk(
  'userSuggestions/fetchLoggedInUserSuggestions',
  async () => {
    console.log('fetchLoggedInUserSuggestions');
    const token = window.localStorage.getItem('token');
    const { data } = await axios.get(`/api/userSuggestions/me`, {
      headers: { authorization: token },
    });
    return data;
  }
);

export const addSuggestion = createAsyncThunk(
  'userSuggestions/addSuggestion',
  async (form) => {
    try {
      const token = window.localStorage.getItem('token');
      const { data } = await axios.post(`/api/userSuggestions`, form, {
        headers: { authorization: token },
      });
      toast.success('Your suggestion has been submitted!', defaultToast);
      return data;
    } catch (error) {
      toast.error(
        error.response ? error.response.data : 'Unable to submit suggestion',
        defaultToast
      );
    }
  }
);

export const reviewSuggestion = createAsyncThunk(
  'admin/reviewSuggestion',
  async (form) => {
    try {
      const token = window.localStorage.getItem('token');
      const { data } = await axios.put(
        `/api/userSuggestions/${form.id}`,
        { adminResponse: form.adminResponse, status: form.status },
        {
          headers: { authorization: token },
        }
      );
      toast.success('Reviewed suggestion!', defaultToast);
      return data;
    } catch (error) {
      toast.error(
        error.response ? error.response.data : 'Unable to submit review',
        defaultToast
      );
    }
  }
);

const initialState = {
  suggestions: [],
  singleSuggestion: {},
  loggedInUserSuggestions: [],
  status: 'idle',
  error: null,
};

const userSuggestionsSlice = createSlice({
  name: 'userSuggestions',
  initialState,
  reducers: {
    clearUserSuggestions: (state) => {
      state.suggestions = [];
      state.singleSuggestion = {};
      state.loggedInUserSuggestions = [];
      state.status;
      ('idle');
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllSuggestions.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchAllSuggestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.suggestions = action.payload;
      })
      .addCase(fetchAllSuggestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(fetchSingleSuggestion.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchSingleSuggestion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.singleSuggestion = action.payload;
      })
      .addCase(fetchSingleSuggestion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(fetchLoggedInUserSuggestions.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchLoggedInUserSuggestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.loggedInUserSuggestions = action.payload;
      })
      .addCase(fetchLoggedInUserSuggestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export default userSuggestionsSlice.reducer;
