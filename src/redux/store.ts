import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import cateroryReducer from "./slices/categorySlice";
import searchReducer from "./slices/searchSlice";
import authReducer from "./slices/authSlice";



export const store = configureStore(
    {
        reducer:{
            theme: themeReducer,
            category: cateroryReducer,
            search: searchReducer,
            auth: authReducer
        },
    }
)



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch