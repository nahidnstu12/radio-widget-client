import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import radioSlice from "./radioSlice";

export const store = configureStore({
    reducer: {
        radio: radioSlice
    },
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>