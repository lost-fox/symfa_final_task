/* eslint-disable max-len */
import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';
import { Button } from 'components/ui/Button';
import { Icon } from 'components/ui/Icon';

import { ReactComponent as CallIcon } from '../../../assets/icon/call.svg';
import { ReactComponent as MapIcon } from '../../../assets/icon/map.svg';
import { ReactComponent as TimeIcon } from '../../../assets/icon/time.svg';

import styles from './NotificationCard.module.scss';

export const NotificationCard = memo(() => {
    const { wrapper, personInfo, deliveryInfo, br } = styles;

    return <div className={wrapper}>
        <div className={personInfo}>
            <div className={styles.person}>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KWIKwaojpneN3qgoL7Ec2xT4EcwjbQ8ImQ&usqp=CAU' size='medium' shape='rectangle' />
                <div className={styles.info}>
                    <h2 className={styles.title}>Budi Sanjaya</h2>
                    <p className={styles.id}>ID : 78A6767</p>
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
                    <p className={styles.deliveryValue}>55 minutes</p>
                </div>
            </div>
            <div className={styles.deliveryItem}>
                <Icon> <MapIcon/></Icon>
                <div className={styles.deliveryDecsription}>
                    <p className={styles.deliveryTitle}>Your Delivery Address</p>
                    <p className={styles.deliveryValue}>Kediri City</p>
                </div>
            </div>
        </div>
    </div>;
});

NotificationCard.displayName = 'NotificationCard';
