import { RootState } from "../../../../config/store";


export const getItemNumber = (state: RootState) => state.items.itemNumber || 1;
export const getNumber = (state: RootState) => state.items.phoneNum || '';
export const getError = (state: RootState) => state.items.error || '';