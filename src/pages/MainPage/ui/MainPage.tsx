import { Suspense, useState } from "react";
import { Loader } from "../../../components/Loader";
import { ReviewList } from "../../../entities/Review/ui/ReviewList/ReviewList";
import { useReviewList } from "../../../entities/Review/api/reviewListApi";
import cls from "./MainPage.module.scss";
import { HStack, VStack } from "../../../components/Stack";
import { AddItemToCard } from "../../../features/addItemToCard";
import { ItemList } from "../../../entities/Items/ui/ItemList/ItemList";
import { useItemsList } from "../../../entities/Items/ui/getItemsListApi";
import { Button } from "../../../components/Button";
import { useAppSelector } from "../../../lib/hooks/useAppSelector/useAppSelector";
import { getPageNum } from "../../../entities/Items/model/selectors/pageSelectors";
import { useAppDispatch } from "../../../lib/hooks/useAppDispatch/useAppDispatch";
import { pageActions } from "../../../entities/Items/model/slices/pageSlice";
import {} from "../../../";
import { HeaderTitle } from "../../../widgets/Title";

const MainPage = () => {
  const { data = [], error, isLoading } = useReviewList();
  const page = useAppSelector(getPageNum);
  const dispatch = useAppDispatch();
  const {
    data: items,
    isLoading: isLoadingItems,
    isFetching,
  } = useItemsList(page);

  const setNextPage = () => {
    dispatch(pageActions.setPage(page + 1));
  };

  const setPreviousPage = () => {
    dispatch(pageActions.setPage(page - 1));
  };

  return (
    <div className={cls.wrapper}>
      <Suspense fallback={<Loader />}>
        <VStack max align="center">
          <HeaderTitle className={cls.title} />
          <ReviewList reviews={data} isLoading={isLoading} />
          <AddItemToCard className={cls.addCard} />
          <ItemList items={items?.products || []} />
          <HStack gap="24" className={cls.container} wrap>
            <Button onClick={setPreviousPage} disabled={page === 1}>
              Пред
            </Button>
            <Button onClick={setNextPage}>Слд</Button>
          </HStack>
        </VStack>
        {isFetching && <Loader />}
      </Suspense>
    </div>
  );
};

export default MainPage;
