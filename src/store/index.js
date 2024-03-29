import { configureStore } from '@reduxjs/toolkit'
import { kanbanApi } from '../components/services/kanbanService'
import authSlice from './authSlice'
import addFormSlice from './addFormSlice'
import cardsSlice from './cardsSlice'

export const store = configureStore({
  reducer: {
    [kanbanApi.reducerPath]: kanbanApi.reducer,
    auth: authSlice,
    forms: addFormSlice,
    cards: cardsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kanbanApi.middleware)
})
