import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    iso: 'DZA',
};

export const selectedCountrySlice = createSlice({
    name: 'selectedCountry',
    initialState,
    reducers: {
        setSelectedIso: (state, action) => {
            state.iso = action.payload;
        }
    }
})

export const { setSelectedIso } = selectedCountrySlice.actions;

export const selectSelectedCountry = (state) => state.selectedCountry.iso;

export default selectedCountrySlice.reducer;
