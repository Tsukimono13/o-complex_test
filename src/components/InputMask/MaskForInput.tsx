import React from "react";
import InputMask from "react-input-mask";
import cls from "./../Input/Input.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export interface MaskForInputProps {
  mask: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const MaskForInput = (props: MaskForInputProps) => {
  const { mask, placeholder, className, onChange, value } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <InputMask
      mask={mask}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
      className={classNames(cls.input, {}, [className])}
    />
  );
};
