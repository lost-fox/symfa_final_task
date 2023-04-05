import { HTMLAttributes, memo } from 'react';

import styles from './Tab.module.scss';

interface ITabProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
}

export const Tab = memo((props: ITabProps) => {
    const { wrapper, title, line } = styles;
    const { id, children, isActive = false } = props;

    return (
        <div id={id} className={wrapper}>
            <h2 className={title}>{children}</h2>
            {isActive ? <hr className={line} /> : ''}
        </div>
    );
});

Tab.displayName = 'Tab';
