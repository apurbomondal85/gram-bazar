import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './featured/counter/counterSlice'
import categoryReducer from './featured/category/categorySlice'
import productsReducer from './featured/product/productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    products: productsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch