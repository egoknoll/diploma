import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export const initialState: { value: string } = {
    value: 'Articles'
}

export const categorySlice = createSlice(
    {
        name: 'category',
        initialState,
        reducers: {
            changeCategory: (state: { value: string}, action: PayloadAction<string>) => {
                state.value = action.payload
            }
        }
    }
)

export const { changeCategory } = categorySlice.actions

const cateroryReducer = categorySlice.reducer

export default cateroryReducer