import { memo } from 'react';
import classNames from 'classnames';

import styles from './Icon.module.scss';

interface IIconProps {
    color?: string;
    children: React.ReactNode;
}

export const Icon = memo((props: IIconProps) => {
    const { wrapper } = styles;
    const { color = 'orange', children } = props;

    return <div className={classNames(wrapper, styles[color])}>{children}</div>;
});

Icon.displayName = 'Icon';
