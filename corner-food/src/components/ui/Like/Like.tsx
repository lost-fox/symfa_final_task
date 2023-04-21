import { memo } from 'react';

import { ReactComponent as LikeIcon } from '../../../assets/icon/favorite.svg';

import styles from './Like.module.scss';

interface ILike {
    id: string;
    isActive?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

export const Like = memo((props: ILike) => {
    const { wrapper } = styles;
    const { isActive = false, onClick, id } = props;

    const likeClassName = isActive ? styles.active : styles.noActive;

    return <div id={id} className={wrapper} onClick={onClick}>
        <LikeIcon className={likeClassName}/>
    </div>;
});

Like.displayName = 'Like';
