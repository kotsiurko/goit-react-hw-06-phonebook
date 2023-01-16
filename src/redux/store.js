import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/slice';
import { filterSlice } from './filter/slice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const store = configureStore({
  reducer: {
    [contactsSlice.name]: persistedContactsReducer,
    [filterSlice.name]: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);