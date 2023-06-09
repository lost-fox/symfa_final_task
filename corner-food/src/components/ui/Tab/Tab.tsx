import { HTMLAttributes, memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './Tab.module.scss';

interface ITabProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isProfile?: boolean;
}

export const Tab = memo((props: ITabProps) => {
    const { wrapper, title, titleProfile, line } = styles;
    const { id, children, isActive = false, isProfile = false } = props;

    return (
        <div id={id} className={wrapper}>
            <Link to={`/${id}`} ><h2 className={ isProfile ? titleProfile :  title}>{children}</h2></Link>
            {isActive ? <hr className={line} /> : ''}
        </div>
    );
});

Tab.displayName = 'Tab';
