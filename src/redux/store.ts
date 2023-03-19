import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import cateroryReducer from "./slices/categorySlice";



export const store = configureStore(
    {
        reducer:{
            theme: themeReducer,
            category: cateroryReducer,
        },
    }
)



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch