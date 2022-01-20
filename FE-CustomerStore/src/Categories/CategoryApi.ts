import { api } from "../App/Api"
import { category } from "./Category"

const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<category[], void>({
      query: () => '/api/categories',
    }),
    createCategory: build.mutation<void, category>({
        query: category => ({
            url: 'api/categories',
            method: 'POST',
            body: category
        })
    })
  })
})

export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi