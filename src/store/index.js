import { configureStore } from '@reduxjs/toolkit'
import { kanbanApi } from '../components/services/kanbanService'
import authSlice from './authSlice'
import addFormSlice from './addFormSlice'
import updateCardSlice from './updateCardSlice'

export const store = configureStore({
  reducer: {
    [kanbanApi.reducerPath]: kanbanApi.reducer,
    auth: authSlice,
    forms: addFormSlice,
    selectedCard: updateCardSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kanbanApi.middleware)

})
