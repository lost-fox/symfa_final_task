import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart, ICartSchema } from 'store/types/cart';

const initialState: ICartSchema = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action:  PayloadAction<ICart>) => {
            state.cart = [...state.cart, action.payload];
        },
        exchangeCount: (state, action:  PayloadAction<ICart>) => {
            const { id, count: newCount } = action.payload;

            state.cart.forEach(item => {
                if (item.id === id) {
                    item.count = newCount;
                }
            });

        },
    },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
