import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { Avatar } from 'components/ui/Avatar';
import { Tab } from 'components/ui/Tab';

import styles from './ProfileHeader.module.scss';

export const ProfileHeader = memo(() => {
    const { wrapper, header, user, tabs } = styles;
    const location = useLocation();

    return <div className={wrapper}>
        <header className={header}>
            <h1 className={styles.title}>My Profile</h1>
        </header>

        <div className={user}>
            <Avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQF_PSw0kE57U07rL6m3A41QDolNQkejlPg
                &usqp=CAU'
                size="big"
                shape="circle"/>
            <div className={styles.userInfo}>
                <h2 className={styles.name}>Achmad Qomarudin</h2>
                <p className={styles.subtitle}>achmadprogrammer@gmail.com</p>
                <p className={styles.subtitle}>User ID : 37664872</p>
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
