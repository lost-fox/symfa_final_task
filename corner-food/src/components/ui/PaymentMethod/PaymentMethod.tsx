import { HTMLAttributes, memo } from 'react';

import { Checkbox } from '../Checkbox';

import styles from './PaymentMethod.module.scss';

interface IPaymentMethodProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    isActive?: boolean;
    onClick: (event: React.MouseEvent) => void;
}

export const PaymentMethod = memo((props: IPaymentMethodProps) => {
    const { wrapper } = styles;
    const { children, value, onClick, isActive = false } = props;

    return <div id={value} className={wrapper} onClick={onClick}>
        <div className={styles.icon}>{children}</div>
        <p className={styles.title}>{value}</p>
        <Checkbox isActive={isActive} />
    </div>;
});

PaymentMethod.displayName = 'PaymentMethod';
