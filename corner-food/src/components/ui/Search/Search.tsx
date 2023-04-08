import { memo } from 'react';

import SearchIcon from '../../../assets/icon/search.svg';

import styles from './Search.module.scss';

export const Search = memo(() => {
    const { wrapper, input, icon } = styles;

    return <div className={wrapper}>
        <input className={input} type="text" placeholder='Search food . . .' />
        <img className={icon} src={SearchIcon} alt="search icon" />
    </div>;
});

Search.displayName = 'Search';
