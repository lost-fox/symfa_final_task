import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from 'components/components/OrderCard';
import { Promocode } from 'components/components/Promocode';
import { Button } from 'components/ui/Button';
import { useAppSelector } from 'store/rootReducer';
import { createOrder, getAllCouriers } from 'store/services';
import { cartActions } from 'store/slices';
import { useAppDispatch } from 'store/store';
import { TODAY } from 'utils/constants/common';
import { ROUTES } from 'utils/constants/routes.enum';

import { ReactComponent as CloseIcon } from '../../assets/icon/close.svg';
import { ReactComponent as LineIcon } from '../../assets/icon/line.svg';

import styles from './Order.module.scss';

export const Order = memo(() => {
    const { wrapper, header, orderItems, main } = styles;
    const { cart, user } = useAppSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const closePage = () => {
        navigate(ROUTES.HOME);
    };

    const getPrice = () => cart.cart.reduce((acc, item) => acc += item.count * item.price, 0).toFixed(2);

    const totalPrice = () => {
        const promo = +cart.discount.slice(0, cart.discount.length - 1);

        return (+getPrice() * (1 - promo / 100)).toFixed(2);
    };

    const createNewOrder = async () => {
        const courier = await getAllCouriers();

        const freeCouriers = courier.filter(item => item.isFree);

        const randomCourier = Math.floor(Math.random() * freeCouriers.length - 1);

        const meals = cart.cart.map(item => ({
            name: item.name,
            price: item.price,
            count: item.count,
        }));

        const deliveryTime = Math.floor(40 + Math.random() * (60 + 1 - 40));

        const finish = new Date(Date.now() + deliveryTime * 60 * 1000);

        const data = {
            userId: user.user!._id,
            total: +totalPrice(),
            meals,
            courier: [{
                id: freeCouriers[randomCourier]._id,
                name: freeCouriers[randomCourier].fullName,
                image: freeCouriers[randomCourier].image,
            }],
            deliveryTime,
            start: TODAY,
            finish,
        };

        createOrder(data);
        dispatch(cartActions.resetCart());
    };

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
                    <p className={styles.price}>${totalPrice()}</p>
                </div>
            </div>
            <Button value="CONFIRM ORDER" type="order" onClick={createNewOrder} />
        </main>
    </div>;
});

Order.displayName = 'Order';
