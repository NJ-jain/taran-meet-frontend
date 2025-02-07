import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../api/Auth';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await loginUser(email, password);
      if (data.token) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


export const register = createAsyncThunk(
    'auth/register',
    async ({ name, email, password, interest }, thunkAPI) => {
      try {
        const data = await registerUser(name, email, password, interest);
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );