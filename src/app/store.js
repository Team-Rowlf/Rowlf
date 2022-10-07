import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from '../features/user/userSlice';
import recipesSlice from '../features/recipes/recipesSlice';

const rootReducer = combineReducers({ user: userSlice, recipes: recipesSlice });

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
