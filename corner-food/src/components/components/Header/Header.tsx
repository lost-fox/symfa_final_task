import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';
import { Search } from 'components/ui/Search';
import { useAppSelector } from 'store/rootReducer';
import { DEFAULT_AVATAR } from 'utils/constants/common';

import { ReactComponent as FilterIcon } from '../../../assets/icon/filter.svg';

import styles from './Header.module.scss';

export const Header = memo(() => {
    const { wrapper, title, info, filtersWrapper, filter, filterIcon } = styles;
    const { user } = useAppSelector(state => state);

    return <div className={wrapper}>
        <div className={info}>
            <h1 className={title}>Let’s eat<br/>
                Quality food
            </h1>
            <Avatar
                src={user.user?.image || DEFAULT_AVATAR}
                size='small'
                shape='circle'
            />
        </div>
        <div className={filtersWrapper}>
            <Search/>
            <div className={filter}>
                <FilterIcon className={filterIcon} />
            </div>
        </div>
    </div>;
});

Header.displayName = 'Header';
