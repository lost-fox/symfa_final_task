import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { ROUTES } from 'utils/constants/routes.enum';

import styles from './Avatar.module.scss';

interface IAvatarProps {
    src: string;
    size: 'small' | 'big';
}

export const Avatar = memo((props: IAvatarProps) => {
    const { wrapper, image } = styles;
    const { src, size } = props;

    return <Link to={ROUTES.PROFILE} className={wrapper}>
        <img className={classNames(image, styles[size])} src={src} alt='Avatar item' />
    </Link>;
});

Avatar.displayName = 'Avatar';
