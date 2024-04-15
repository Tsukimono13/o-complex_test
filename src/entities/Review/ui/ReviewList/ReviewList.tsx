import { HTMLAttributeAnchorTarget, memo } from 'react';
import cls from './ReviewList.module.scss';
import { Skeleton } from '../../../../components/Skeleton';
import { Review } from '../../model/types/review';
import { classNames } from '../../../../lib/classNames/classNames';
import { ReviewListItem } from '../ReviewListItem/ReviewListItem';
import { HStack } from '../../../../components/Stack';

interface ReviewListProps {
    className?: string;
    reviews: Review[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = () => new Array(2)
    .fill(0)
    .map((item, index) => (
        <HStack justify='center' align='center' gap='34'>
          <Skeleton border='15' width={468} height={611}/>
        </HStack>
    ));

export const ReviewList = memo((props: ReviewListProps) => {
    const {
        className,
        reviews,
        isLoading,
        target,
    } = props;

    if (!isLoading && !reviews.length) {
        return (
            <div className={classNames(cls.ReviewList, {}, [className])}>
                    <h2>Мы не нашли ничего</h2>
            </div>
        );
    }

    return (
        <HStack justify='center' align='center' wrap max
            className={classNames(cls.ReviewList, {}, [className])}
        >
            {reviews.map((item, index) => (
                <ReviewListItem
                review={item}
                    target={target}
                    key={index}
                    index={index}
                />
            ))}
            {isLoading && getSkeletons()}
        </HStack>

    );
});
