import { createSlice } from '@reduxjs/toolkit'

export const initialState: { value: boolean } = {
    value: true
}

export const themeSlice = createSlice(
    {
        name: 'theme',
        initialState,
        reducers: {
            changeTheme: (state: { value: boolean}) => {
                state.value = !state.value
            }
        }
    }
)

export const { changeTheme } = themeSlice.actions

const themeReducer = themeSlice.reducer

export default themeReducer