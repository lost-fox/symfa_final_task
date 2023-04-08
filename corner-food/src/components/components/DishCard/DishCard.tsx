import { memo } from 'react';

import { Button } from 'components/ui/Button';
import { Like } from 'components/ui/Like';

import styles from './DishCard.module.scss';

export const DishCard = memo(() => {
    const { wrapper, imageWrapper, image, likeItem, info } = styles;

    const handlerBtn = () => console.log('hello!!');

    return <div className={wrapper}>
        <div className={imageWrapper}>
            <img
                className={image}
                // eslint-disable-next-line max-len
                src="https://img.jamieoliver.com/home/wp-content/uploads/features-import/2019/01/healthydishes_LEAD_630x420.jpg"
                alt="dish icon" />
            <div className={likeItem}>
                <Like/>
            </div>
        </div>
        <div className={info}>
            <h2 className={styles.title}>Grilled Fish</h2>
            <p className={styles.subtitle}>Spicy grilled fish</p>
            <p className={styles.price}><span className={styles.currency}>$</span>8.50</p>
        </div>
        <Button value='Add to Cart' type='dish' onClick={handlerBtn} />
    </div>;
});

DishCard.displayName = 'DishCards';
