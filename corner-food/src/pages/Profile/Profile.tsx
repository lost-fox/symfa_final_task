import { memo } from 'react';

import { Navbar } from 'components/components/Navbar';
import { Payment } from 'components/components/Payment';
import { ProfileHeader } from 'components/components/ProfileHeader';

import styles from './Profile.module.scss';

export const Profile = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        <ProfileHeader/>
        <Payment/>
        <Navbar/>
    </div>;
});

Profile.displayName = 'Profile';
