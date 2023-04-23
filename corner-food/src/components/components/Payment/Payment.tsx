import { memo, useState } from 'react';

import { Button } from 'components/ui/Button';
import { PaymentMethod } from 'components/ui/PaymentMethod';
import { useAppSelector } from 'store/rootReducer';

import { ReactComponent as AmazonIcon } from '../../../assets/icon/amazon.svg';
import { ReactComponent as GooglePayIcon } from '../../../assets/icon/google.svg';
import { ReactComponent as MasterCardIcon } from '../../../assets/icon/master-card.svg';
import { ReactComponent as PaypalIcon } from '../../../assets/icon/paypal.svg';
import { ReactComponent as  PlusIcon } from '../../../assets/icon/plus.svg';

import styles from './Payment.module.scss';

export const Payment = memo(() => {
    const { wrapper } = styles;
    const [activePayment, setActivePayment] = useState<string>('Paypal');
    const { user } = useAppSelector(state => state.user);

    const handlerMethod = (event: React.MouseEvent) => {
        const { id } = event.currentTarget as HTMLDivElement;

        setActivePayment(id);
    };

    return <div className={wrapper}>
        <h3 className={styles.title}>My Card</h3>
        <div className={styles.cardItem}>
            <div className={styles.card}>
                <AmazonIcon className={styles.amazon}/>
                <div className={styles.userName}>{user?.username}</div>
                <div className={styles.cardInfo}>
                    <p className={styles.numberCard}>5763  ••••  ••••  2021</p>
                    <p className={styles.money}>$3.464.98</p>
                </div>
                <div className={styles.cardIcon}>
                    <MasterCardIcon/>
                    <p className={styles.cardIconTitle}>Platinum Card</p>
                </div>
            </div>
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
