import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from 'components/components/OrderCard';
import { Promocode } from 'components/components/Promocode';
import { Button } from 'components/ui/Button';
import { useAppSelector } from 'store/rootReducer';
import { ROUTES } from 'utils/constants/routes.enum';

import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';
import { ReactComponent as LineIcon } from '../../assets/icon/line.svg';

import styles from './Order.module.scss';

export const Order = memo(() => {
    const { wrapper, header, orderItems, main } = styles;
    const { cart } = useAppSelector(state => state);
    const navigate = useNavigate();

    const closePage = () => {
        navigate(ROUTES.HOME);
    };

    const getPrice = () => cart.cart.reduce((acc, item) => acc += item.count * item.price, 0).toFixed(2);

    return <div className={wrapper}>
        <header className={header}>
            <h1 className={styles.title}> My Order</h1>
            <CloseIcon className={styles.icon} onClick={closePage} />
        </header>
        <main className={main}>
            <div className={orderItems}>
                {
                    cart.cart.map(item => <OrderCard key={item.id} value={item} />)
                }
            </div>
            <Promocode/>
            <div className={styles.details}>
                <div className={styles.detailItem}>
                    <p className={styles.subtotal}>Subtotal</p>
                    <p className={styles.subtotal}>${getPrice()}</p>
                </div>
                <LineIcon className={styles.iconLine}/>
                <div className={styles.detailItem}>
                    <p className={styles.subtotal}>Delivery</p>
                    <p className={styles.subtotal}>Free</p>
                </div>
                <LineIcon className={styles.iconLine}/>
                <div className={styles.detailItem}>
                    <p className={styles.total}>Total</p>
                    <p className={styles.price}>${getPrice()}</p>
                </div>
            </div>
            <Button value="CONFIRM ORDER" type="order" />
        </main>
    </div>;
});

Order.displayName = 'Order';
