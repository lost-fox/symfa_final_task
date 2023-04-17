import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import { Like } from 'components/ui/Like';
import { IMeals } from 'store/types/meals';

import styles from './DishCard.module.scss';

interface IDishCard {
    value: IMeals;
}

export const DishCard = memo((props: IDishCard) => {
    const { wrapper, imageWrapper, likeItem, info } = styles;
    const { _id, name, subtitle, image, price } = props.value;
    const [isLike, setIsLike] = useState<boolean>(false);

    const handlerBtn = () => console.log('hello!!');

    const handlerLike = () => setIsLike(!isLike);

    return <Link  className={wrapper} to={`/${_id}`}>
        <div className={imageWrapper}>
            <img
                className={styles.image}
                // eslint-disable-next-line max-len
                src={image}
                alt="dish icon" />
            <div className={likeItem}>
                <Like onClick={handlerLike} isActive={isLike}/>
            </div>
        </div>
        <div className={info}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <p className={styles.price}><span className={styles.currency}>$</span>{price}</p>
        </div>
        <Button id={_id} value='Add to Cart' type='dish' onClick={handlerBtn} />
    </Link>;
});

DishCard.displayName = 'DishCards';
