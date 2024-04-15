import { rtkApi } from "../../../api/rtkApi";
import { Item, PageResponse } from "../model/types/item";



const itemsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getItemsList: build.query<PageResponse, number>({
            query: (page) => ({
                url: `/products?page=${page}&page_size=6`,
            }),
        }),
    }),
});

export const useItemsList = itemsListApi.useGetItemsListQuery;
