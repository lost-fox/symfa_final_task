import { memo } from 'react';

import { Button } from 'components/ui/Button';

import { ReactComponent as PromoIcon } from '../../../assets/icon/promo_code.svg';

import styles from './Promocode.module.scss';

export const Promocode = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        <PromoIcon className={styles.icon} />
        <input className={styles.input} type="text" placeholder='Promo code . . .'/>
        <Button value="Apply" type="promo" />
    </div>;
});

Promocode.displayName = 'Promocode';
