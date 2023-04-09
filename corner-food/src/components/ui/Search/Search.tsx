import { memo } from 'react';

import { ReactComponent as SearchIcon } from '../../../assets/icon/search.svg';

import styles from './Search.module.scss';

export const Search = memo(() => {
    const { wrapper, input, icon } = styles;

    return <div className={wrapper}>
        <input className={input} type="text" placeholder='Search food . . .' />
        <SearchIcon className={icon} />
    </div>;
});

Search.displayName = 'Search';
