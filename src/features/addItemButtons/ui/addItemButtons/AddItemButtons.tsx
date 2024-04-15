import React, { memo, useState } from "react";
import { Button, ButtonSize } from "../../../../components/Button";
import {
  Text,
  TextAlign,
  TextSize,
  TextTheme,
} from "../../../../components/Text";
import { classNames } from "../../../../lib/classNames/classNames";
import { Input } from "../../../../components/Input";
import { HStack } from "../../../../components/Stack";
import { Card, CardTheme } from "../../../../components/Card";
import cls from './AddItemButtons.module.scss';
import { useAppSelector } from "../../../../lib/hooks/useAppSelector/useAppSelector";
import { getItemNumber } from "../../../addItemToCard/model/selectors/addItemsSelector";
import { useAppDispatch } from "../../../../lib/hooks/useAppDispatch/useAppDispatch";
import { addItemActions } from "../../../addItemToCard/model/slices/addItemToCardSlice";

export interface AddItemButtons {
  className?: string;
  id: string;
}

export const AddItemButtons = memo((props: AddItemButtons) => {
  const { className, id } = props;
  const [open, setIsOpen] = useState(false);
  const dispatch = useAppDispatch()

  const number = useAppSelector(getItemNumber)

  const buyItemHandler = () => {
    setIsOpen(true);
  };

  const addItemHandler = () => {
    dispatch(addItemActions.getNumber(number + 1));
  };

  const minusHandler = () => {
    if (number > 0) {
      dispatch(addItemActions.getNumber(number - 1));
    }
  };

  const onChangeHandler = (newValue: string) => {
      dispatch(addItemActions.getNumber(Number(newValue))); 

  };

  return (
    <div className={classNames("", {}, [className])}>
      {open ? (
        <HStack gap="7">
          <Button
            onClick={minusHandler}
            disabled={number === 0}
            size={ButtonSize.L}
            round
          >
            -
          </Button>
          <Card theme={CardTheme.BACKGROUND} className={cls.numContainer}>
            <Input type="number" value={number} onChange={onChangeHandler} />
          </Card>
          <Button onClick={addItemHandler} size={ButtonSize.L} round>
            +
          </Button>
        </HStack>
      ) : (
        <Button fullWidth onClick={buyItemHandler}>
          <Text
            text={"купить"}
            size={TextSize.L}
            theme={TextTheme.INVERTED}
            align={TextAlign.CENTER}
          />
        </Button>
      )}
    </div>
  );
});
