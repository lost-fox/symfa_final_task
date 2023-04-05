import { memo } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
    value: string;
    type: string;
}

export const Button = memo((props: IButtonProps) => {
    const { value, type } = props;

    return <button className={classNames(styles.button, styles[type])} type='button'>{value}</button>;
});

Button.displayName = 'Button';
