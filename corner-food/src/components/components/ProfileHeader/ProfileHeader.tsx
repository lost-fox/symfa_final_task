import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';
import { Tab } from 'components/ui/Tab';

import styles from './ProfileHeader.module.scss';

export const ProfileHeader = memo(() => {
    const { wrapper, user, tabs } = styles;

    return <div className={wrapper}>
        <h1 className={styles.title}>My Profile</h1>

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
            <Tab isProfile>Account</Tab>
            <Tab  isProfile isActive>Payment</Tab>
            <Tab isProfile>History</Tab>
        </div>
    </div>;
});

ProfileHeader.displayName = 'ProfileHeader';
