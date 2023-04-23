import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AnyAction, combineReducers } from '@reduxjs/toolkit';

import type { IStateSchema } from './types/state-schema';
import { cartReducer } from './slices/cart.slice';
import { loaderReducer } from './slices/loader.slice';
import { mealsReducer } from './slices/meals.slice';
import { searchReducer } from './slices/search.slice';
import { userReducer } from './slices/user.slice';

const combinedReducer = combineReducers<IStateSchema>({
    meals: mealsReducer,
    search: searchReducer,
    user: userReducer,
    cart: cartReducer,
    loader: loaderReducer,
});

export const rootReducer = (state: IStateSchema | undefined, action: AnyAction) => {
    if (action.type === 'user/logout') {
        state = undefined;
    }

    return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
