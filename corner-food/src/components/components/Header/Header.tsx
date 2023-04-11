import { memo } from 'react';

import { Avatar } from 'components/ui/Avatar';
import { Search } from 'components/ui/Search';

import { ReactComponent as FilterIcon } from '../../../assets/icon/filter.svg';

import styles from './Header.module.scss';

export const Header = memo(() => {
    const { wrapper, title, info, filtersWrapper, filter, filterIcon } = styles;

    return <div className={wrapper}>
        <div className={info}>
            <h1 className={title}>Let’s eat<br/>
                Quality food
            </h1>
            <Avatar
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQF_PSw0kE57U07rL6m3A41QDolNQkejlPg
                &usqp=CAU'
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
