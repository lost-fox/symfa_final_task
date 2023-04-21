import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { IMeals } from 'store/types/meals';
import { IUser, IUserSchema } from 'store/types/user';

const initialState: IUserSchema = {
    user: null,
    favorite: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        logout: state => {
            state.user = null;
        },
        getFavorite: (state, action: PayloadAction<IMeals[]>) => {
            state.favorite = action.payload;
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
