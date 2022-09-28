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
      { payload:  { username, email, password, token }  }
    ) => {
      state.token = token
    },
    setAccessCredentials: (
      state,
      { payload: { access, refresh } }
    ) => {
      state.token = access
      state.refresh = refresh
    },
    setRefreshedCredentials: (
      state,
      { payload: {access} }
    ) => {
      state.token = access
    }
  },
})

export const { setCredentials, setAccessCredentials, setRefreshedCredentials } = slice.actions

export default slice.reducer

