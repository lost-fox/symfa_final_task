import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { IMeals, IMealsSchema } from 'store/types/meals';

const initialState: IMealsSchema = {
    meals: [],
    meal: null,
};

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        getAllMeals: (state, action: PayloadAction<IMeals[]>) => {
            state.meals = action.payload;
        },
        getById: (state, action: PayloadAction<IMeals>) => {
            state.meal = action.payload;
        },
    },
});

export const { actions: mealsActions, reducer: mealsReducer } = mealsSlice;
