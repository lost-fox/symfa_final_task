import { memo, useState } from 'react';

import { Button } from 'components/ui/Button';
import { getDiscountValue } from 'store/services/cart.service';
import { useAppDispatch } from 'store/store';

import { ReactComponent as PromoIcon } from '../../../assets/icon/promo_code.svg';

import styles from './Promocode.module.scss';

export const Promocode = memo(() => {
    const { wrapper } = styles;
    const dispatch = useAppDispatch();
    const [promocode, setPromocode] = useState<string>('');

    const handlerInput = (event: React.ChangeEvent) => {
        const { value } = event.target as HTMLInputElement;

        setPromocode(value.toUpperCase());
    };

    const getDiscount = () => {
        getDiscountValue({ value: promocode }, dispatch);
    };

    return <div className={wrapper}>
        <PromoIcon className={styles.icon} />
        <input className={styles.input} type="text" placeholder='Promo code . . .' onChange={handlerInput} />
        <Button value="Apply" type="promo" onClick={getDiscount} />
    </div>;
});

Promocode.displayName = 'Promocode';
