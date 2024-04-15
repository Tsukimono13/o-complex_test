import React, { memo } from "react";
import { Card, CardTheme } from "../../../components/Card";
import { TextSize, TextTheme, TextAlign, Text } from "../../../components/Text";
import { classNames } from "../../../lib/classNames/classNames";

interface HeaderTitleProps {
  className?: string;
}

export const HeaderTitle = memo((props: HeaderTitleProps) => {
  const { className } = props;
  return (
    <Card
      theme={CardTheme.SECONDARY}
      className={classNames("", {}, [className])}
      max
    >
      <Text
        title="тестовое задание"
        size={TextSize.L}
        theme={TextTheme.INVERTED}
        align={TextAlign.CENTER}
      />
    </Card>
  );
});
