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

//find all craftsman by profession 
export const findCraftsmen = createAsyncThunk(
    'craftsman/findCraftsmen',
    async (searchTerm, thunkAPI) => {
        try {
            return await services.findCraftsmen(searchTerm);
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

export const resetCraftsman = createAsyncThunk(
    'craftsman/resetCrafts',
    async (_, thunkAPI) => {
        try {

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

//add rev by user to tmp revs
export const addTmpReview = createAsyncThunk(
    'tmpreview/create',
    async (tmpReview, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            return await services.addTmpReview(tmpReview, token);

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

//move tmp review to craftsman 
export const addReview = createAsyncThunk(
    'tmpreview/moveRev',
    async (id, review, thunkAPI) => {

        try {
            const token = thunkAPI.getState().auth.user.token
            return await services.addReview(id, review, token);

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
            //search craftsman by profession
            .addCase(findCraftsmen.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(findCraftsmen.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = action.payload;
            })
            .addCase(findCraftsmen.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(resetCraftsman, (state) => {
                state.craftsman = null;
            })
            .addCase(addTmpReview.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTmpReview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = action.payload;
            })
            .addCase(addTmpReview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addReview.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addReview.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.craftsman = action.payload;
            })
            .addCase(addReview.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
});

export const { reset } = craftsmanSlice.actions;
export default craftsmanSlice.reducer;