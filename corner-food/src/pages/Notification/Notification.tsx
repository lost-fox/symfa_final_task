import { memo, useEffect } from 'react';

import { NotificationCard } from 'components/components/NotificationCard';
import { useAppSelector } from 'store/rootReducer';
import { getAllOrders } from 'store/services/order.service';
import { useAppDispatch } from 'store/store';

import styles from './Notification.module.scss';

export const Notification = memo(() => {
    const { wrapper, main } = styles;
    const dispatch = useAppDispatch();
    const { orders, user } = useAppSelector(state => state.user);
    const today = new Date();

    useEffect(() => {
        getAllOrders(user!._id, dispatch);
    }, [dispatch, user]);

    return <div className={wrapper}>
        <main className={main}>
            <h1 className={styles.title}>Notification</h1>
            <div className={styles.items}>
                {
                    // eslint-disable-next-line array-callback-return, consistent-return
                    orders.map(item => {
                        if (new Date(item.finish) > today) {
                            return <NotificationCard key={item._id} value={item} />;
                        }

                    })
                }
            </div>
        </main>
    </div>;
});

Notification.displayName = 'Notification';
