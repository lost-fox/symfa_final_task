import { memo } from 'react';

import { ReactComponent as NotificationIcon } from '../../../assets/icon/bell.svg';
import { ReactComponent as BookIcon } from '../../../assets/icon/book.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icon/home.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icon/profile.svg';
import { ReactComponent as OrderIcon } from '../../../assets/icon/shopping_bag.svg';

import styles from './Navbar.module.scss';

export const Navbar = memo(() => {
    const { wrapper, iconItems, icon, orderBtn } = styles;

    return <div className={wrapper}>
        <div className={iconItems}>
            <HomeIcon className={icon}/>
            <BookIcon className={icon}/>
        </div>
        <div className={iconItems}>
            <NotificationIcon className={icon}/>
            <ProfileIcon className={icon}/>
        </div>
        <div className={orderBtn}>
            <div className={styles.button}>
                <OrderIcon className={icon} />
            </div>
        </div>
    </div>;
});

Navbar.displayName = 'Navbar';
