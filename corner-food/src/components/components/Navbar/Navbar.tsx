import { memo, useEffect, useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from 'utils/constants/routes.enum';

import { ReactComponent as NotificationIcon } from '../../../assets/icon/bell.svg';
import { ReactComponent as BookIcon } from '../../../assets/icon/book.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icon/home.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icon/profile.svg';
import { ReactComponent as OrderIcon } from '../../../assets/icon/shopping_bag.svg';

import styles from './Navbar.module.scss';

export const Navbar = memo(() => {
    const { wrapper, iconItems, icon, iconActive, orderBtn } = styles;
    const location = useLocation();
    const [path, setPath] = useState('/');

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname]);

    const activeIconClass = classNames(icon, iconActive);

    return <div className={wrapper}>
        <div className={iconItems}>
            <Link to={ROUTES.HOME}>
                <HomeIcon className={path === ROUTES.HOME ?  activeIconClass : icon}/>
            </Link>
            <Link to={ROUTES.FAVORITE}>
                <BookIcon className={path === ROUTES.FAVORITE ?  activeIconClass : icon}/>
            </Link>
        </div>
        <div className={iconItems}>
            <Link to={ROUTES.NOTIFICATION}>
                <NotificationIcon className={path === ROUTES.NOTIFICATION ?  activeIconClass : icon}/>
            </Link>
            <Link to={ROUTES.PROFILE}>
                <ProfileIcon className={path === ROUTES.PROFILE ?  activeIconClass : icon}/>
            </Link>
        </div>
        <div className={orderBtn}>
            <Link to={ROUTES.ORDER}>
                <div className={styles.button}>
                    <OrderIcon className={icon} />
                </div>
            </Link>
        </div>
    </div>;
});

Navbar.displayName = 'Navbar';
