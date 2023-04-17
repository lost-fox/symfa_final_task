import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([]),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = (typeof store)['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;
