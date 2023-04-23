import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';
import { Button } from 'components/ui/Button';
import { Icon } from 'components/ui/Icon';
import { useAppSelector } from 'store/rootReducer';
import { IGetOrder } from 'store/types/order';

import { ReactComponent as CallIcon } from '../../../assets/icon/call.svg';
import { ReactComponent as MapIcon } from '../../../assets/icon/map.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icon/time.svg';

import styles from './NotificationCard.module.scss';

interface INotifacationCard {
    value: IGetOrder;
}

export const NotificationCard = memo((props: INotifacationCard) => {
    const { wrapper, personInfo, deliveryInfo, br } = styles;
    const { user } = useAppSelector(state => state.user);
    const { courier, deliveryTime } = props.value;

    return <div className={wrapper}>
        <div className={personInfo}>
            <div className={styles.person}>
                <Avatar src={courier[0].image} size='medium' shape='rectangle' />
                <div className={styles.info}>
                    <h2 className={styles.title}>{courier[0].name}</h2>
                    <p className={styles.id}>ID : {courier[0].id.slice(0, 8)}</p>
                    <p className={styles.worker}>Food courier</p>
                </div>
            </div>
            <Button value={<CallIcon/>} type='phone' />
        </div>
        <div className={br} />
        <div className={deliveryInfo}>
            <div className={styles.deliveryItem}>
                <Icon> <TimeIcon/></Icon>
                <div className={styles.deliveryDecsription}>
                    <p className={styles.deliveryTitle}>Your Delivery Time</p>
                    <p className={styles.deliveryValue}>{deliveryTime} minutes</p>
                </div>
            </div>
            <div className={styles.deliveryItem}>
                <Icon> <MapIcon/></Icon>
                <div className={styles.deliveryDecsription}>
                    <p className={styles.deliveryTitle}>Your Delivery Address</p>
                    <p className={styles.deliveryValue}>{user?.address || 'No info'}</p>
                </div>
            </div>
        </div>
    </div>;
});

NotificationCard.displayName = 'NotificationCard';
