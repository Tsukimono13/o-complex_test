import { RootState } from "../../../../config/store";

export const getPageNum = (state: RootState) => state.page.page || 1;

