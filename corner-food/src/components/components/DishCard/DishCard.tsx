import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import { Like } from 'components/ui/Like';
import { useAppSelector } from 'store/rootReducer';
import { favoriteMealUser } from 'store/services/user.service';
import { cartActions } from 'store/slices';
import { useAppDispatch } from 'store/store';
import { ICart } from 'store/types/cart';
import { IMeals } from 'store/types/meals';

import styles from './DishCard.module.scss';

interface IDishCard {
    value: IMeals;
}

export const DishCard = memo((props: IDishCard) => {
    const { wrapper, imageWrapper, likeItem, info } = styles;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { user, cart } = useAppSelector(state => state);
    const { _id, name, subtitle, image, price } = props.value;
    const [isLike, setIsLike] = useState<boolean>(
        !!user.user!.favoriteDish.filter(item => item.mealId === _id).length,
    );

    const handlerBtn = (event: React.MouseEvent) => {
        event.stopPropagation();

        const isMeal = cart.cart.filter(item => item.id === _id);

        const cartData: ICart = {
            id: _id,
            name,
            subtitle,
            image,
            price,
            count:  isMeal.length ?  isMeal[0].count + 1 : 1,
        };

        if (isMeal.length) {

            dispatch(cartActions.exchangeCount(cartData));
        } else {

            dispatch(cartActions.addItemToCart(cartData));
        }

    };

    const handlerLike = (event: React.MouseEvent) => {
        event.stopPropagation();
        const { id: mealId } = event.currentTarget as HTMLDivElement;

        favoriteMealUser(user.user!._id, mealId, dispatch );

        setIsLike(!isLike);
    };

    const handlerClickCard = (event: React.MouseEvent) => {
        const { id } = event.target as HTMLDivElement;

        if (id !== 'like') {
            navigate(`/${_id}`);
        }

        if (id !== 'btn') {
            navigate(`/${_id}`);
        }
    };

    return <div  className={wrapper} onClick={handlerClickCard}>
        <div className={imageWrapper}>
            <img
                className={styles.image}
                // eslint-disable-next-line max-len
                src={image}
                alt="dish icon" />
            <div id="like" className={likeItem}>
                <Like id={_id} onClick={handlerLike} isActive={isLike}/>
            </div>
        </div>
        <div className={info}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.price}><span className={styles.currency}>$</span>{price}</p>
        </div>
        <Button id='btn' value='Add to Cart' type='dish' onClick={handlerBtn} />
    </div>;
});

DishCard.displayName = 'DishCards';
