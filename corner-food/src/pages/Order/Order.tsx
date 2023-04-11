import { memo } from 'react';

import { OrderCard } from 'components/components/OrderCard';

import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';

import styles from './Order.module.scss';

export const Order = memo(() => {
    const { wrapper, header, orderItems } = styles;

    return <div className={wrapper}>
        <div className={header}>
            <h1 className={styles.title}> My Order</h1>
            <CloseIcon className={styles.icon}/>
        </div>
        <div className={orderItems}>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </div>
    </div>;
});

Order.displayName = 'Order';
