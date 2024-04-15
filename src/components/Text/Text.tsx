import { CSSProperties, memo } from 'react';
import cls from './Text.module.scss';
import { Mods, classNames } from '../../lib/classNames/classNames';

export enum TextTheme {
 PRIMARY = 'primary',
 ERROR = 'error',
 INVERTED = 'inverted',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  marginT?: string | number;
  size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        marginT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    const styles:CSSProperties = {
        marginTop: marginT,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    className={cls.title}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text}
                    style={styles}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
