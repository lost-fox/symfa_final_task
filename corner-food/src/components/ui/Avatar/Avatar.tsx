import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from 'utils/constants/routes.enum';

import styles from './Avatar.module.scss';

interface IAvatarProps {
    src: string;
    size: 'small' | 'medium' | 'big';
    shape: 'circle' | 'rectangle'
}

export const Avatar = memo((props: IAvatarProps) => {
    const { wrapper } = styles;
    const { src, size, shape } = props;

    return <Link to={ROUTES.PROFILE} className={wrapper}>
        <img className={classNames(styles[size], styles[shape])} src={src} alt='Avatar item' />
    </Link>;
});

Avatar.displayName = 'Avatar';
