import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import type { IStateSchema } from './types/state-schema';
import { mealsReducer } from './slices/meals.slice';
import { searchReducer } from './slices/search.slice';
import { userReducer } from './slices/user.slice';

const combinedReducer = combineReducers<IStateSchema>({
    meals: mealsReducer,
    search: searchReducer,
    user: userReducer,
});

export const rootReducer = (state: IStateSchema | undefined, action: AnyAction) =>

    combinedReducer(state, action);

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
