import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import cls from './Input.module.scss';
import { classNames } from '../../lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        onChange,
        className,
        value,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };


    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
            </div>
    );
});
