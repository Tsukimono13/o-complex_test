import { rtkApi } from "../../../api/rtkApi";
import { Review } from "../model/types/review";


const reviewListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getReviewList: build.query<Review[], void>({
            query: () => ({
                url: '/reviews',
            }),
        }),
    }),
});

export const useReviewList = reviewListApi.useGetReviewListQuery;
