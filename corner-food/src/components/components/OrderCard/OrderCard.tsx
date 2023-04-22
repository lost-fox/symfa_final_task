import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';
import { cartActions } from 'store/slices';
import { useAppDispatch } from 'store/store';
import { ICart } from 'store/types/cart';

import { Count } from '../Count';

import styles from './OrderCard.module.scss';

interface IOrderCard {
    value: ICart;
}

export const OrderCard = memo((props: IOrderCard) => {
    const { wrapper, info } = styles;
    const { id, name, subtitle, price, image, count } = props.value;
    const dispatch = useAppDispatch();

    const changeCount = (amount: number) => {

        const data = {
            id,
            name,
            subtitle,
            price,
            image,
            count: amount,
        };

        if (amount === 0) {
            dispatch(cartActions.deletemealToCart(data));
        } else {
            dispatch(cartActions.exchangeCount(data));
        }

    };

    return <div className={wrapper}>
        <Avatar
            src={image}
            size='big'
            shape='rectangle'
        />

        <div className={info}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.price}><span className={styles.currency}>$</span>{price}</p>
        </div>
        <Count className={styles.count} amount={count} onClick={changeCount} />
    </div>;
});

OrderCard.displayName = 'OrderCard';
