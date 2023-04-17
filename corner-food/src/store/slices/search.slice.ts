import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISearchSchema } from 'store/types/search';

const initialState: ISearchSchema = {
    search: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
});

export const { actions: searchActions, reducer: searchReducer } = searchSlice;
