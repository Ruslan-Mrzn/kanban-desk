import { createSlice } from '@reduxjs/toolkit'


const initialCard = {
  id: null,
  row: null,
  seq_num: null,
  text: null
}

const slice = createSlice({
  name: 'selectedCard',
  initialState: initialCard,
  reducers: {
    setSelectedCard: (
      state,
      payload
    ) => {
      for(let key in payload) {
        state[key] = payload[key]
      }
      console.log(state)
      return state
    },
  },
})

export const { setSelectedCard } = slice.actions

export default slice.reducer
