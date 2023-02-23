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
    }
)

export const getAllTmpCraftsman = createAsyncThunk(
    'craftsman/allTmpCraft',
    async (_, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            return await services.getAllTmpCraftsman(token);

        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

//delete one tmp craftsman
export const deleteTmpCraftsman = createAsyncThunk(
    'craftsman/deleteTmpCra',
    async (id, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            return await services.deleteTmpCraftsman(id, token);

        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

//move tmp craftsman to perma colection
export const moveTmpCraftsman = createAsyncThunk(
    'craftsman/moveTmpCra',
    async (id, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            return await services.moveTmpCraftsman(id, token);

        } catch (error) {
            const message = (
                error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message);
        }
    }
);

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
            //create tmp craftsman by user
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
            //get all tmp kraftsman by admin
            .addCase(getAllTmpCraftsman.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTmpCraftsman.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = action.payload;
            })
            .addCase(getAllTmpCraftsman.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //delete tmp crftsman by admin
            .addCase(deleteTmpCraftsman.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteTmpCraftsman.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = state.craftsman.filter((oneCraft) => oneCraft._id != action.payload.id);
            })
            .addCase(deleteTmpCraftsman.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            //move tmp craftsman to perma
            .addCase(moveTmpCraftsman.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(moveTmpCraftsman.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = state.craftsman.filter((oneCraft) => oneCraft._id != action.payload.id);
            })
            .addCase(moveTmpCraftsman.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const { reset } = craftsmanSlice.actions;
export default craftsmanSlice.reducer;