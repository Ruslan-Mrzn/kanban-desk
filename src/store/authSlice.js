import { createSlice } from '@reduxjs/toolkit'


const initialToken = JSON.parse(localStorage.getItem('authToken')) || ''
const initialRefresh = JSON.parse(localStorage.getItem('authRefresh')) || ''

const slice = createSlice({
  name: 'auth',
  initialState: {
    token: initialToken,
    refresh: initialRefresh
  },
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
      { payload: { access, refresh } }
    ) => {
      state.token = access
      state.refresh = refresh
    },
  },
})

export const { setCredentials, setAccessCredentials } = slice.actions

export default slice.reducer

