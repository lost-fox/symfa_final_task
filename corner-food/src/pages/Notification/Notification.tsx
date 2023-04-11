import { memo } from 'react';

import { Navbar } from 'components/components/Navbar';
import { NotificationCard } from 'components/components/NotificationCard';

import styles from './Notification.module.scss';

export const Notification = memo(() => {
    const { wrapper, main } = styles;

    return <div className={wrapper}>
        <main className={main}>
            <h1 className={styles.title}>Notification</h1>
            <div className={styles.items}>
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </main>
        <Navbar/>
    </div>;
});

Notification.displayName = 'Notification';
