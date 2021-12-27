import { api } from "../App/Api"
import { item } from "./Item"

const itemApi = api.injectEndpoints({
  endpoints: (build) => ({
    getItems: build.query<item[], void>({
      query: () => '/api/products',
    }),
    createItem: build.mutation<void, item>({
        query: item => ({
            url: 'api/products',
            method: 'POST',
            body: item
        })
    })
  })
})

export const { useGetItemsQuery, useCreateItemMutation } = itemApi