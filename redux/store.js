// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage'

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, rootReducer)

// import thunk from 'redux-thunk'; // Import Redux Thunk
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false, // ⛔ Debugging only
      }),
});
export const persistor = persistStore(store)
