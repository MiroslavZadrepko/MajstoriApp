import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import craftsmanReducer from './features/craftsman/craftsmanSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        craftsman: craftsmanReducer
    }
})
