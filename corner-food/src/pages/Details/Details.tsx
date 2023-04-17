/* eslint-disable max-len */
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Count } from 'components/components/Count';
import { Button } from 'components/ui/Button';
import { Icon } from 'components/ui/Icon';
import { Like } from 'components/ui/Like';
import { useAppSelector } from 'store/rootReducer';
import { getMealById } from 'store/services/meals.service';
import { useAppDispatch } from 'store/store';

import { ReactComponent as RatingIcon } from '../../assets/icon/star.svg';
import { ReactComponent as ClockIcon } from '../../assets/icon/time.svg';

import styles from './Details.module.scss';

export const Details = memo(() => {
    const { wrapper, imageInfo, info } = styles;
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { meal } = useAppSelector(state => state.meals);

    useEffect(() => {
        if (!id) return;

        getMealById(id, dispatch);
    }, [dispatch, id]);

    return <div className={wrapper}>
        <div className={imageInfo}>
            <img className={styles.image} src={meal?.image} alt="dish icon" />
            <div className={styles.likeItem}>
                <Like />
            </div>

        </div>
        <div className={info}>
            <div className={styles.titles}>
                <div>
                    <h1 className={styles.title}>{meal?.name}</h1>
                    <p className={styles.subtitle}>{meal?.subtitle}</p>
                </div>
                <p className={styles.price}><span className={styles.currency}>$</span>{meal?.price}</p>
            </div>
            <div className={styles.delivery}>
                <div className={styles.deliveryItem}>
                    <Icon color='yellow'><RatingIcon/></Icon>
                    {meal?.rating}
                </div>
                <div className={styles.deliveryItem}>
                    <Icon color='blue'><ClockIcon/></Icon>
                    {meal?.timeCook} min
                </div>
            </div>
            <div className={styles.about}>
                <h2 className={styles.aboutTitle}>
                    About
                </h2>
                <p className={styles.aboutDescription}>{meal?.description}</p>
            </div>
            <div className={styles.order}>
                <Count />
                <Button value='ADD TO CART' type='details' />
            </div>
        </div>
    </div>;
});

Details.displayName = 'Details';
