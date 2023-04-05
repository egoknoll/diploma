import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export const initialState: { value: string } = {
    value: ''
}

export const searchSlice = createSlice(
    {
        name: 'search',
        initialState,
        reducers: {
            changeSearchState: (state: { value: string}, action: PayloadAction<string>) => {
                state.value = action.payload
            }
        }
    }
)

export const { changeSearchState } = searchSlice.actions

const searchReducer = searchSlice.reducer

export default searchReducer