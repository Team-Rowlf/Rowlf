import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from '../features/user/userSlice';

const rootReducer = combineReducers({ user: userSlice });

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
