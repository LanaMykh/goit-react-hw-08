import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { authReduser } from './auth/slice';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filters/slice';


const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReduser),
    contacts: contactsReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);