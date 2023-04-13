import { memo } from 'react';

import { OrderCard } from 'components/components/OrderCard';
import { Promocode } from 'components/components/Promocode';
import { Button } from 'components/ui/Button';

import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';
import { ReactComponent as LineIcon } from '../../assets/icon/line.svg';

import styles from './Order.module.scss';

export const Order = memo(() => {
    const { wrapper, header, orderItems, main } = styles;

    return <div className={wrapper}>
        <header className={header}>
            <h1 className={styles.title}> My Order</h1>
            <CloseIcon className={styles.icon}/>
        </header>
        <main className={main}>
            <div className={orderItems}>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
            </div>
            <Promocode/>
            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <p className={styles.subtotal}>Subtotal</p>
                    <p className={styles.subtotal}>$15.00</p>
                </div>
                <LineIcon className={styles.iconLine}/>
                <div className={styles.detailItem}>
                    <p className={styles.subtotal}>Delivery</p>
                    <p className={styles.subtotal}>Free</p>
                </div>
                <LineIcon className={styles.iconLine}/>
                <div className={styles.detailItem}>
                    <p className={styles.total}>Total</p>
                    <p className={styles.price}>Free</p>
                </div>
            </div>
            <Button value="CONFIRM ORDER" type="order" />
        </main>
    </div>;
});

Order.displayName = 'Order';
