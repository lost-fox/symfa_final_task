import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ILoaderSchema } from 'store/types/loader';

const initialState: ILoaderSchema = {
    isLoader: false,
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        changeLoader(state, action: PayloadAction<boolean>) {
            state.isLoader = action.payload;
        },
    },
});

export const { actions: loaderActions, reducer: loaderReducer } = loaderSlice;
