import { memo } from 'react';

import { searchActions } from 'store/slices';
import { useAppDispatch } from 'store/store';

import { ReactComponent as SearchIcon } from '../../../assets/icon/search.svg';

import styles from './Search.module.scss';

export const Search = memo(() => {
    const { wrapper, input, icon } = styles;
    const dispatch = useAppDispatch();

    const handlerSearch = (event: React.ChangeEvent) => {
        const { value } = event.target as HTMLInputElement;

        dispatch(searchActions.setSearch(value));
    };

    return <div className={wrapper}>
        <input className={input} type="text" placeholder='Search food . . .' onChange={handlerSearch}/>
        <SearchIcon className={icon} />
    </div>;
});

Search.displayName = 'Search';
