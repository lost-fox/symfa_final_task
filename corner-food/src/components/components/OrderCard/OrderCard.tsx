import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';

import { Count } from '../Count';

import styles from './OrderCard.module.scss';

export const OrderCard = memo(() => {
    const { wrapper, info } = styles;

    return <div className={wrapper}>
        <Avatar
            // eslint-disable-next-line max-len
            src="https://img.jamieoliver.com/home/wp-content/uploads/features-import/2019/01/healthydishes_LEAD_630x420.jpg"
            size='big'
            shape='rectangle'
        />

        <div className={info}>
            <h2 className={styles.title}>Grilled Fish</h2>
            <p className={styles.subtitle}>Spicy grilled fish</p>
            <p className={styles.price}><span className={styles.currency}>$</span>8.50</p>
        </div>
        <Count className={styles.count} />
    </div>;
});

OrderCard.displayName = 'OrderCard';
