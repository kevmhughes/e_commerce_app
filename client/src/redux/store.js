/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import cartReducer from './cartReducer';

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const stripe = require('stripe')(
  'sk_test_51MbYZKLpZald5BFxRTF2cA5eOrnD5MvgV1Nmv5BnBJ9S30YoDfZJ4KOrdSCf7AvgvxsyCp1N2sNlSONhBz0TGnYT00tETKQEGI'
);

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export let persistor = persistStore(store);
