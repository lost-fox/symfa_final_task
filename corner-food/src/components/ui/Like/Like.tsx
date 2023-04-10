import { memo } from 'react';

import { ReactComponent as LikeIcon } from '../../../assets/icon/favorite.svg';

import styles from './Like.module.scss';

interface ILike {
    isActive?: boolean;
    onClick?: () => void;
}

export const Like = memo((props: ILike) => {
    const { wrapper } = styles;
    const { isActive = false, onClick } = props;

    const likeClassName = isActive ? styles.active : styles.noActive;

    return <div className={wrapper} onClick={onClick}>
        <LikeIcon className={likeClassName}/>
    </div>;
});

Like.displayName = 'Like';
