import { memo } from 'react';

import { Tab } from 'components/ui/Tab';

import LogoIcon from '../../../assets/img/shopping-bag.png';

import styles from './AuthHeader.module.scss';

export const AuthHeader = memo(() => {
    const { wrapper, title, subtitle, tabs } = styles;

    return (
        <div className={wrapper}>
            <img src={LogoIcon} alt="logo icon" />
            <h1 className={title}>Corner Food</h1>
            <h3 className={subtitle}>Delivery App </h3>
            <div className={tabs}>
                <Tab id='login' isActive>Login</Tab>
                <Tab id='signup'>Signup</Tab>
            </div>
        </div>
    );
});

AuthHeader.displayName = 'AuthHeader';
