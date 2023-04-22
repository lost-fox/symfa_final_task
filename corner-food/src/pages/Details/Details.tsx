import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Count } from 'components/components/Count';
import { Button } from 'components/ui/Button';
import { Icon } from 'components/ui/Icon';
import { Like } from 'components/ui/Like';
import { useAppSelector } from 'store/rootReducer';
import { getMealById } from 'store/services/meals.service';
import { favoriteMealUser } from 'store/services/user.service';
import { cartActions } from 'store/slices';
import { useAppDispatch } from 'store/store';
import { ICart } from 'store/types/cart';

import { ReactComponent as RatingIcon } from '../../assets/icon/star.svg';
import { ReactComponent as ClockIcon } from '../../assets/icon/time.svg';

import styles from './Details.module.scss';

export const Details = memo(() => {
    const { wrapper, imageInfo, info } = styles;
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { meal } = useAppSelector(state => state.meals);
    const { user, cart } = useAppSelector(state => state);
    const [isLike, setIsLike] = useState<boolean>(
        !!user.user?.favoriteDish.filter(item => item.mealId === meal?._id).length,
    );
    const [count, setCount] = useState<number>(cart.cart.filter(item => item.id === meal!._id)[0]?.count || 1);

    useEffect(() => {
        if (!id) return;

        getMealById(id, dispatch);
    }, [dispatch, id]);

    const handlerLike = (event: React.MouseEvent) => {
        event.stopPropagation();
        const { id: mealId } = event.currentTarget as HTMLDivElement;

        favoriteMealUser(user.user!._id, mealId, dispatch );

        setIsLike(!isLike);
    };

    const handlerCount = (amount: number) => {
        setCount(amount);
    };

    const handlerBtn = (event: React.MouseEvent) => {
        event.stopPropagation();

        const cartData: ICart = {
            id: meal!._id,
            name: meal!.name,
            subtitle: meal!.subtitle,
            image: meal!.image,
            price: meal!.price,
            count,
        };

        const duplicate = cart.cart.filter(item => item.id === meal?._id);

        if (duplicate.length) {
            dispatch(cartActions.exchangeCount(cartData));
        } else {
            dispatch(cartActions.addItemToCart(cartData));
        }
    };

    return <div className={wrapper}>
        <div className={imageInfo}>
            <img className={styles.image} src={meal?.image} alt="dish icon" />
            <div className={styles.likeItem}>
                <Like id={id!} onClick={handlerLike} isActive={isLike} />
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
                <Count onClick={handlerCount} amount={count} />
                <Button value='ADD TO CART' type='details' onClick={handlerBtn} />
            </div>
        </div>
    </div>;
});

Details.displayName = 'Details';
