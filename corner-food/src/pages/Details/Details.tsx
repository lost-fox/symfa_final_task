/* eslint-disable max-len */
import { memo } from 'react';

import { Count } from 'components/components/Count';
import { Button } from 'components/ui/Button';
import { Icon } from 'components/ui/Icon';
import { Like } from 'components/ui/Like';

import { ReactComponent as RatingIcon } from '../../assets/icon/star.svg';
import { ReactComponent as ClockIcon } from '../../assets/icon/time.svg';

import styles from './Details.module.scss';

const mockDetails = {
    id: '1',
    name: 'Grilled Fish',
    subtitle: 'Spicy grilled fish',
    description:
        'Our most popular choice! A delicious mix of different meal with various ingredients like salmon, tomato, bean, potato and much more.',
    image: 'https://img.jamieoliver.com/home/wp-content/uploads/features-import/2019/01/healthydishes_LEAD_630x420.jpg',
    type: 'Spicy',
    price: 8.5,
    timeDelivery: 25,
    rating: 4.8,
};

export const Details = memo(() => {
    const { wrapper, imageInfo, info } = styles;
    const { name, subtitle, description, image, price, timeDelivery, rating } = mockDetails;

    return <div className={wrapper}>
        <div className={imageInfo}>
            <img className={styles.image} src={image} alt="dish icon" />
            <div className={styles.likeItem}>
                <Like />
            </div>

        </div>
        <div className={info}>
            <div className={styles.titles}>
                <div>
                    <h1 className={styles.title}>{name}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <p className={styles.price}><span className={styles.currency}>$</span>{price}</p>
            </div>
            <div className={styles.delivery}>
                <div className={styles.deliveryItem}>
                    <Icon color='yellow'><RatingIcon/></Icon>
                    {rating}
                </div>
                <div className={styles.deliveryItem}>
                    <Icon color='blue'><ClockIcon/></Icon>
                    {timeDelivery} min
                </div>
            </div>
            <div className={styles.about}>
                <h2 className={styles.aboutTitle}>
                    About
                </h2>
                <p className={styles.aboutDescription}>{description}</p>
            </div>
            <div className={styles.order}>
                <Count />
                <Button value='ADD TO CART' type='details' />
            </div>
        </div>
    </div>;
});

Details.displayName = 'Details';
