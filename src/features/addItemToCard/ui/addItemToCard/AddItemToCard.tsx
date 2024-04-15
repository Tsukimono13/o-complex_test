import React, { memo, useCallback, useState } from "react";
import {
  Text,
  TextAlign,
  TextSize,
  TextTheme,
} from "../../../../components/Text";
import { Card, CardTheme } from "../../../../components/Card";
import { classNames } from "../../../../lib/classNames/classNames";
import cls from "./AddItemToCard.module.scss";
import { HStack, VStack } from "../../../../components/Stack";
import { Button } from "../../../../components/Button";
import { useAppSelector } from "../../../../lib/hooks/useAppSelector/useAppSelector";
import {
  getError,
  getItemNumber,
  getNumber,
} from "../../model/selectors/addItemsSelector";
import { getPageNum } from "../../../../entities/Items/model/selectors/pageSelectors";
import { useAppDispatch } from "../../../../lib/hooks/useAppDispatch/useAppDispatch";
import { addItemActions } from "../../model/slices/addItemToCardSlice";
import { MaskForInput } from "../../../../components/InputMask";

export interface AddItemToCardProps {
  className?: string;
}

export const AddItemToCard = memo((props: AddItemToCardProps) => {
  const { className } = props;
  const number = useAppSelector(getItemNumber);
  const phone = useAppSelector(getNumber);
  const error = useAppSelector(getError);
  const dispatch = useAppDispatch();

  const setOrder = () => (value: string) => {};

  const setPhoneNumberHandler = useCallback(
    (value: string) => {
      dispatch(addItemActions.setPhoneNumber(value));
    },
    [dispatch]
  );

  return (
    <Card className={classNames(cls.AddItemToCard, {}, [className])}>
      <Text title="Добавленные товары" className={cls.title} />
      <VStack className={cls.container} max>
        <HStack max justify="between">
          <Text text="товар 1" />
          <HStack gap="24">
            {number}
            <Text text="3645₽" />
          </HStack>
        </HStack>
        <HStack max justify="between">
          <Text text="товccар 2" />
          <HStack gap="24">
            {number}
            <Text text="53460₽" />
          </HStack>
        </HStack>
      </VStack>
      <HStack className={cls.bntContainer}>
        <Card theme={CardTheme.BACKGROUND} className={cls.card}>
          <MaskForInput
            mask="+7 (999) 999-99-99"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={setPhoneNumberHandler}
          />
          {error}
        </Card>
        <Button onClick={setOrder} fullWidth className={cls.btn}>
          <Text
            text="заказать"
            size={TextSize.L}
            theme={TextTheme.INVERTED}
            align={TextAlign.CENTER}
          />
        </Button>
      </HStack>
    </Card>
  );
});
