import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userSlice from '../features/user/userSlice';
import recipesSlice from '../features/recipes/recipesSlice';
import profileSlice from '../features/profile/profileSlice';
import shoppingListSlice from '../features/shoppingList/shoppingListSlice';
import adminSlice from '../features/admin/adminSlice';
import userSuggestionsSlice from '../features/userSuggestions/userSuggestionsSlice';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userSlice,
  recipes: recipesSlice,
  profile: profileSlice,
  shoppingList: shoppingListSlice,
  admin: adminSlice,
  userSuggestions: userSuggestionsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});
export const persistor = persistStore(store);
