import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { Avatar } from 'components/ui/Avatar';
import { Tab } from 'components/ui/Tab';
import { useAppSelector } from 'store/rootReducer';
import { DEFAULT_AVATAR } from 'utils/constants/common';

import { ThemeSwitcher } from '../ThemeSwitcher';

import styles from './ProfileHeader.module.scss';

export const ProfileHeader = memo(() => {
    const { wrapper, header, tabs } = styles;
    const location = useLocation();
    const { user } = useAppSelector(state => state);

    return <div className={wrapper}>
        <header className={header}>
            <h1 className={styles.title}>My Profile</h1>
            <ThemeSwitcher/>
        </header>

        <div className={styles.user}>
            <Avatar
                src={user.user?.image || DEFAULT_AVATAR}
                size="big"
                shape="circle"/>
            <div className={styles.userInfo}>
                <h2 className={styles.name}>{user.user?.username}</h2>
                <p className={styles.subtitle}>{user.user?.email}</p>
                <p className={styles.subtitle}>User ID : {user.user?._id}</p>
            </div>
        </div>

        <div className={tabs}>
            <Tab
                id="profile?activeTab=account"
                isProfile
                isActive={location.search.includes('account')}
            >
                Account
            </Tab>
            <Tab
                id="profile?activeTab=payment"
                isProfile
                isActive={location.search.includes('payment')}
            >
                Payment
            </Tab>
            <Tab
                id="profile?activeTab=history"
                isProfile
                isActive={location.search.includes('history')}
            >
                History
            </Tab>
        </div>
    </div>;
});

ProfileHeader.displayName = 'ProfileHeader';
