import { HttpService } from 'api/http-service';

import { mealsActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { IMeals } from 'store/types/meals';

export const getMeals = async (dispatch: AppDispatch): Promise<void> => {
    const meals = await HttpService.get<IMeals[]>('/meals');

    dispatch(mealsActions.getAllMeals(meals));
};

export const getMealById = async (id: string, dispatch: AppDispatch): Promise<void> => {
    const meal = await HttpService.get<IMeals>(`/meals/${id}`);

    dispatch(mealsActions.getById(meal));
};
