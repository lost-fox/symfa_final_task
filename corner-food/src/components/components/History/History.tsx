import { memo, useEffect } from 'react';

import { Loader } from 'components/ui/Loader';
import { useAppSelector } from 'store/rootReducer';
import { getAllOrders } from 'store/services';
import { useAppDispatch } from 'store/store';
import { TODAY } from 'utils/constants/common';

import { HistoryCard } from '../HistoryCard';

import styles from './History.module.scss';

export const History = memo(() => {
    const { wrapper, items } = styles;
    const dispatch = useAppDispatch();
    const { orders, user } = useAppSelector(state => state.user);
    const { loader } = useAppSelector(state => state);

    useEffect(() => {
        getAllOrders(user!._id, dispatch);
    }, [dispatch, user]);

    return loader.isLoader ?
        <Loader/>
        : <div className={wrapper}>
            <div className={items}>
                {
                // eslint-disable-next-line array-callback-return, consistent-return
                    orders.map(item => {
                        if (new Date(item.finish) < TODAY) {
                            return <HistoryCard key={item._id} value={item} />;
                        }

                    })
                }
            </div>
        </div>;
});

History.displayName = 'History';
