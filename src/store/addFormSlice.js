import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
  name: 'forms',
  initialState: {
    0: false,
    1: false,
    2: false,
    3: false
  },
  reducers: {
    toggleCardAddForm: (
      state,
      {payload}
    ) => {
      state[payload] = !state[payload] },
  },
})

export const { toggleCardAddForm } = slice.actions

export default slice.reducer


