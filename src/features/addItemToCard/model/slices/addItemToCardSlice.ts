import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  ITEMQUANTITY_LOCALSTORAGE_KEY,
  PHONE_LOCALSTORAGE_KEY,
} from "../../../../const/localStorage";

interface AddItemState {
  itemNumber: number;
  phoneNum: string;
  error: string;
  isLoading: boolean;
}
const initialQuantity = localStorage.getItem(ITEMQUANTITY_LOCALSTORAGE_KEY);
const initialPhone = localStorage.getItem(PHONE_LOCALSTORAGE_KEY);

const initialState: AddItemState = {
  itemNumber: initialQuantity ? parseInt(initialQuantity, 10) : 1,
  phoneNum: initialPhone ? initialPhone : "",
  error: "",
  isLoading: false,
};

export const AddItemSlice = createSlice({
  name: "addItem",
  initialState,
  reducers: {
    getNumber: (state, action: PayloadAction<number>) => {
      state.itemNumber = action.payload;
      localStorage.setItem(
        ITEMQUANTITY_LOCALSTORAGE_KEY,
        action.payload.toString()
      );
    },
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNum = action.payload;
      localStorage.setItem(PHONE_LOCALSTORAGE_KEY, action.payload.toString());
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { actions: addItemActions } = AddItemSlice;
export const { reducer: addItemReducer } = AddItemSlice;
