import { HTMLAttributeAnchorTarget, memo } from "react";
import cls from "./ReviewListItem.module.scss";
import { Review } from "../../model/types/review";
import { Card } from "../../../../components/Card";
import { classNames } from "../../../../lib/classNames/classNames";

interface ReviewListItemProps {
  className?: string;
  review: Review;
  target?: HTMLAttributeAnchorTarget;
  index?: number;
}

export const ReviewListItem = memo((props: ReviewListItemProps) => {
  const { className, review, target, index } = props;

  return (
    <Card className={classNames(cls.card, {}, [className])}>
      <div dangerouslySetInnerHTML={{ __html: review.text }} />
      {index === 1 && <h3>{review.text?.match(/<script>([\s\S]*?)<\/script>/)}</h3>}
    </Card>
  );
});
