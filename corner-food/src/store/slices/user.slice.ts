import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { IUser, IUserSchema } from 'store/types/user';

const initialState: IUserSchema = {
    user: null,
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
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
