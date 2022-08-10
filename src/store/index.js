import { configureStore } from '@reduxjs/toolkit'
import { kanbanApi } from '../components/services/kanbanService'
import authSlice from './authSlice'
import addFormSlice from './addFormSlice'
import updateCardSlice from './updateCardSlice'
import { toggleColumnCards } from './showColumnCards'

export const store = configureStore({
  reducer: {
    [kanbanApi.reducerPath]: kanbanApi.reducer,
    auth: authSlice,
    forms: addFormSlice,
    cards: toggleColumnCards,
    selectedCard: updateCardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kanbanApi.middleware)

})
