import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PageState {
  page: number
}

const initialState: PageState = {
  page: 1,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
  },
  },
})


export const { actions: pageActions } = pageSlice;
export const { reducer: pageReducer } = pageSlice;
