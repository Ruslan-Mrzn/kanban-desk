import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const kanbanApi = createApi({
  reducerPath: 'kanbanApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://trello.backend.tests.nekidaem.ru/api/v1/',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState())
      const token = getState().auth.token

      if(token) headers.set('Authorization', `JWT ${token}`)

      return headers
    }
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation ({
      query: (user) => ({
        url: `users/login/`,
        method: 'POST',
        body: user // Body is automatically converted to json with the correct headers
      }),
      //invalidatesTags: ['Cards']
    }),
    getCards: builder.query({
      query: () => ({
        url: `cards/`,
      }),
      providesTags: ['Cards']
    }),
    addCard: builder.mutation ({
      query: (card) => ({
        url: `cards/`,
        method: 'POST',
        body: card // Body is automatically converted to json with the correct headers
      }),
      invalidatesTags: ['Cards']
    }),
    deleteCard: builder.mutation ({
      query: (id) => ({
        url: `cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards']
    }),
  })
})

export const { useLoginUserMutation, useGetCardsQuery, useAddCardMutation, useDeleteCardMutation, useLazyGetCardsQuery } = kanbanApi
