import { memo } from 'react';

import styles from './Input.module.scss';

interface IInputProps {
    type: string;
    label: string;
    icon?: string;
}

export const Input = memo((props: IInputProps) => {
    const { wrapper } = styles;
    const { type, label, icon } = props;

    return <div className={wrapper}>
        <label className={styles.label} htmlFor={label}>
            {label}
        </label>
        <input id={label} className={styles.input} type={type} name={label}  />
        {icon ? <img src={icon} className={styles.icon}  alt='icons'/> : ''}
    </div>;
});

Input.displayName = 'Input';
