import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import services from './craftsmanService';

const initialState = {
    craftsman: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
};

export const createTmpCraftsman = createAsyncThunk(
    'craftsman/create',
    async (craftsman, thunkAPI) => {
        
        try {    
            const token = thunkAPI.getState().auth.user.token
            return await services.createTmpCraftsman(craftsman, token);

        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    })

export const craftsmanSlice = createSlice({
    name: 'craftsman',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTmpCraftsman.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createTmpCraftsman.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = action.payload;
            })
            .addCase(createTmpCraftsman.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const { reset } = craftsmanSlice.actions;
export default craftsmanSlice.reducer;