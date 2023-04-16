import { memo } from 'react';

import styles from './Profile.module.scss';

export const Profile = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        hello
    </div>;
});

Profile.displayName = 'Profile';
