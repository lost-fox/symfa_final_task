import { memo } from 'react';

import { ReactComponent as LikeIcon } from '../../../assets/icon/favorite.svg';

import styles from './Like.module.scss';

export const Like = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        <LikeIcon/>
    </div>;
});

Like.displayName = 'Like';
