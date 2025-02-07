// store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice.js'; // Import the authSlice reducer

const rootReducer = combineReducers({
  auth: authReducer, // Add the authSlice reducer under the 'auth' key
});

export default rootReducer;
