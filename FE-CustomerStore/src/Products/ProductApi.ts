import { api } from "../App/Api"
import { product } from "./Product"

const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<product[], void>({
      query: () => '/api/products',
    }),
    createProduct: build.mutation<void, product>({
        query: item => ({
            url: 'api/products',
            method: 'POST',
            body: item
        })
    })
  })
})

export const { useGetProductsQuery, useCreateProductMutation } = productApi