import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../action/authAction';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        // initial state here
    },
    reducers: {
        // reducers here
    },
    extraReducers: (builder) => {
        builder
            //login
            .addCase(login.pending, (state, action) => {
            })
            .addCase(login.fulfilled, (state, action) => {
                const token = action.payload.token;
                localStorage.setItem('token', token);
            })
            .addCase(login.rejected, (state, action) => {
            })

            //registration
            .addCase(register.pending, (state, action) => {
            })
            .addCase(register.fulfilled, (state, action) => {
                const token = action.payload.token;
                localStorage.setItem('token', token);
            })
            .addCase(register.rejected, (state, action) => {
            });
    },
});

export default authSlice.reducer;