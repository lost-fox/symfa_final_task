import { memo } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
    id?: string;
    value: string;
    type: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button = memo((props: IButtonProps) => {
    const { id, value, type, onClick, disabled } = props;

    return <button
        id={id}
        className={classNames(styles.button, styles[type])}
        type='button'
        onClick={onClick}
        disabled={disabled}
    >
        {value}
    </button>;
});

Button.displayName = 'Button';
