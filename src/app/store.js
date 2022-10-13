import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from '../features/user/userSlice';
import recipesSlice from '../features/recipes/recipesSlice';
import profileSlice from '../features/profile/profileSlice';
import shoppingListSlice from '../features/shoppingList/shoppingListSlice';
import adminSlice from '../features/admin/adminSlice';

const rootReducer = combineReducers({
	user: userSlice,
	recipes: recipesSlice,
	profile: profileSlice,
	shoppingList: shoppingListSlice,
	admin: adminSlice,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
