import { createSlice } from '@reduxjs/toolkit'


const initialToken = JSON.parse(localStorage.getItem('authToken')) || {}

const slice = createSlice({
  name: 'auth',
  initialState: initialToken,
  reducers: {
    setCredentials: (
      state,
      { payload: { token } }
    ) => {
      state.token = token
      console.log(state.token)
    },
    setAccessCredentials: (
      state,
      { payload: { access } }
    ) => {
      console.log(state.token)
      state.token = access
      console.log(state.token)
    },
  },
})

export const { setCredentials, setAccessCredentials } = slice.actions

export default slice.reducer

