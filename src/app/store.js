import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {covidAPI} from "../features/covid/covidAPI";
import {flagsAPI} from "../features/flags/flags";
import selectedCountryReducer from "../features/selectedCountrySlice/selectedCountrySlice";
import openReducer from "../features/selectedCountrySlice/openSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        selectedCountry : selectedCountryReducer ,
        open : openReducer ,
        [covidAPI.reducerPath]: covidAPI.reducer,
        [flagsAPI.reducerPath]: flagsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(covidAPI.middleware).concat(flagsAPI.middleware),
});
