import { memo } from "react";
import cls from "./ItemList.module.scss";
import { Skeleton } from "../../../../components/Skeleton";
import { classNames } from "../../../../lib/classNames/classNames";
import { HStack } from "../../../../components/Stack";
import { Item } from "../../model/types/item";
import { ProductItem } from "../ProductItem/ProductItem";

interface ItemListProps {
  className?: string;
  items: Item[];
  isLoading?: boolean;
}

const getSkeletons = () =>
  new Array(6).fill(0).map((item, index) => (
    <HStack justify="center" align="center" gap="34">
      <Skeleton border="15" width={301} height={812} />
    </HStack>
  ));

export const ItemList = memo((props: ItemListProps) => {
  const { className, items, isLoading } = props;


  return (
    <HStack
      justify="center"
      align="center"
      wrap
      max
      className={classNames(cls.ReviewList, {}, [className])}
    >
      {items.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
      {isLoading && getSkeletons()}
    </HStack>
  );
});
