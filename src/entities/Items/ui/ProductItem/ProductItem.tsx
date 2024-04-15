import cls from "./ProductItem.module.scss";
import { Card, CardTheme } from "../../../../components/Card";
import { classNames } from "../../../../lib/classNames/classNames";
import { Item } from "../../model/types/item";
import { memo } from "react";
import { Text, TextAlign, TextSize } from "../../../../components/Text";
import { AddItemButtons } from "../../../../features/addItemButtons/ui/addItemButtons/AddItemButtons";

interface ReviewListItemProps {
  className?: string;
  item: Item;
}

export const ProductItem = memo((props: ReviewListItemProps) => {
  const { className, item } = props;

  return (
    <Card
      className={classNames(cls.ProductItem, {}, [className])}
      theme={CardTheme.SECONDARY}
      max
    >
      <img src={item.image_url} alt={item.title} className={cls.image} />
      <Text
        title={item.title}
        size={TextSize.M}
        align={TextAlign.CENTER}
        className={cls.title}
      />
      <Text text={item.description} size={TextSize.M} className={cls.content} />
      <Text
        text={"цена: " + item.price + "₽"}
        size={TextSize.L}
        align={TextAlign.CENTER}
      />
      <AddItemButtons className={cls.btn} id={item.id} />
    </Card>
  );
});
