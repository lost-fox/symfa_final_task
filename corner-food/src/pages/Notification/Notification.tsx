import { memo } from 'react';

import { Navbar } from 'components/components/Navbar';

import styles from './Notification.module.scss';

export const Notification = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        Hello
        <Navbar/>
    </div>;
});

Notification.displayName = 'Notification';
