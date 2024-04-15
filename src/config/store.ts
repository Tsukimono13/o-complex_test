import { configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '../api/rtkApi'
import { pageReducer } from '../entities/Items/model/slices/pageSlice'
import { addItemReducer } from '../features/addItemToCard/model/slices/addItemToCardSlice'

export const store = configureStore({
  reducer: {
    [rtkApi.reducerPath]: rtkApi.reducer,
    page: pageReducer,
    items: addItemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch