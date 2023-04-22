import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart, ICartSchema } from 'store/types/cart';

const initialState: ICartSchema = {
    cart: [],
    discount: '0%',
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
        deletemealToCart: (state, action:  PayloadAction<ICart>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        resetCart: state => {
            state.cart = [];
        },
        getDiscount: (state, action: PayloadAction<string> ) => {
            state.discount = action.payload;
        },
    },
});

export const { actions: cartActions, reducer: cartReducer } = cartSlice;
