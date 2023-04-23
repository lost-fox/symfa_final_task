import { memo } from 'react';

import { IGetOrder } from 'store/types/order';

import styles from './HistoryCard.module.scss';

interface IHistoryCart {
    value: IGetOrder;
}

export const HistoryCard = memo((props: IHistoryCart) => {
    const { wrapper, br } = styles;
    const { value } = props;

    return (
        <div className={wrapper}>
            {value.meals.map(item =>
                <div className={styles.meals} key={item.name}>
                    <div className={styles.meal} >
                        {item.name}:

                    </div>
                    <div className={styles.mealCount}>${item.price} * {item.count}</div>
                </div>,
            )}
            <div className={br} />
            <div className={styles.total}>Total: {value.total}$</div>
            <div className={br} />
            <div className={styles.courier}>Completed: {value.courier[0].name}
            </div>
            <div className={styles.courier}>Delivery Time: {value.deliveryTime} minutes</div>
        </div>
    );
});

HistoryCard.displayName = 'HistoryCard';
