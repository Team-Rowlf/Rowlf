import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLikeRecipe = createAsyncThunk(
  'profile/userLikeRecipe',
  async ({ action, id, token }) => {
    const { data } = await axios.put(
      `/api/user/me/updateFavorites`,
      { action, id },
      {
        headers: { authorization: token },
      }
    );
    return data;
  }
);
export const userDisLikeRecipe = createAsyncThunk(
  'profile/userDisLikeRecipe',
  async ({ action, id, token }) => {
    const { data } = await axios.put(
      `/api/user/me/updatedislikes`,
      { action, id },
      {
        headers: { authorization: token },
      }
    );
    return data;
  }
);

export const getUserLikes = createAsyncThunk(
  'profile/getUserLikes',
  async ({ token }) => {
    const { data } = await axios.get('/api/user/me/favoritedrecipes', {
      headers: { authorization: token },
    });
    return data;
  }
);
export const getUserDisLikes = createAsyncThunk(
  'profile/getUserDisLikes',
  async ({ token }) => {
    const { data } = await axios.get('/api/user/me/dislikedrecipes', {
      headers: { authorization: token },
    });
    return data;
  }
);

const initialState = {
  account: {},
  likes: [],
  dislikes: [],
  status: 'idle',
  error: null,
};

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async () => {}
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLikeRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(userDisLikeRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(getUserLikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.likes = action.payload;
      })
      .addCase(getUserLikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(getUserDisLikes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dislikes = action.payload;
      })
      .addCase(getUserDisLikes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const getAllLikesId = (state) =>
  state.profile.likes.reduce((accum, next) => {
    accum.push(next.id);
    return accum;
  }, []);
export const getAllDislikesId = (state) =>
  state.profile.dislikes.reduce((accum, next) => {
    accum.push(next.id);
    return accum;
  }, []);

export default profileSlice.reducer;
