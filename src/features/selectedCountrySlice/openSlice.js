import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
};

export const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        }
    }
})

export const { setOpen } = openSlice.actions;

export const selectOpen = (state) => state.open.open;

export default openSlice.reducer;
