import { memo, useState } from 'react';

import { Button } from 'components/ui/Button';
import { PaymentMethod } from 'components/ui/PaymentMethod';

import { ReactComponent as GooglePayIcon } from '../../../assets/icon/google.svg';
import { ReactComponent as MasterCardIcon } from '../../../assets/icon/master-card.svg';
import { ReactComponent as PaypalIcon } from '../../../assets/icon/paypal.svg';
import { ReactComponent as  PlusIcon } from '../../../assets/icon/plus.svg';

import styles from './Payment.module.scss';

export const Payment = memo(() => {
    const { wrapper } = styles;
    const [activePayment, setActivePayment] = useState<string>('Paypal');

    const handlerMethod = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLDivElement;

        setActivePayment(id);
    };

    return <div className={wrapper}>
        <h3 className={styles.title}>My Card</h3>
        <div className={styles.cardItem}>
            <div className={styles.card} />
            <Button value={<PlusIcon/>} type="add" />
        </div>
        <h3 className={styles.title}>Payment Method</h3>

        <div className={styles.cardItem}>
            <div className={styles.methods}>
                <PaymentMethod
                    value='Credit Card'
                    isActive={activePayment === 'Credit Card'}
                    onClick={handlerMethod}
                >
                    <MasterCardIcon/>
                </PaymentMethod>
                <PaymentMethod
                    value='Paypal'
                    isActive={activePayment === 'Paypal'}
                    onClick={handlerMethod}
                >
                    <PaypalIcon/>
                </PaymentMethod>
                <PaymentMethod
                    value='Google Pay'
                    isActive={activePayment === 'Google Pay'}
                    onClick={handlerMethod}
                >
                    <GooglePayIcon/>
                </PaymentMethod>
            </div>
            <Button value={<PlusIcon/>} type="add" />
        </div>

    </div>;
});

Payment.displayName = 'Payment';
