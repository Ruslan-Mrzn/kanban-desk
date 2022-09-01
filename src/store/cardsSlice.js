import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'cards',
  initialState: JSON.parse(localStorage.getItem('localCards')) || [],
  reducers: {
    onDrop: (
      state,
      {item, monitor}
    ) => {
      state
        .filter(i => i.id !== item.id)
        .concat({ ...item });
    },
    moveCard: (
      state,
      {dragIndex, hoverIndex}
    ) => {
      const card = state[dragIndex]
      return state
        .filter((i, idx) => idx !== dragIndex)
        .splice(hoverIndex, 0, card) },
  },
})

export const { onDrop, moveCard } = slice.actions

export default slice.reducer


