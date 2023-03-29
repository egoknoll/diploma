import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export const initialState: { value: boolean } = {
    value: false
}

export const authSlice = createSlice(
    {
        name: 'category',
        initialState,
        reducers: {
            changeAuthState: (state: { value: boolean}) => {
                state.value = !state.value
            }
        }
    }
)

export const { changeAuthState } = authSlice.actions

const authReducer = authSlice.reducer

export default authReducer