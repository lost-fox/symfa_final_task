import { HttpService } from 'api/http-service';

import { loaderActions, mealsActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { IMeals } from 'store/types/meals';

export const getMeals = async (dispatch: AppDispatch): Promise<void> => {

    try {
        dispatch(loaderActions.changeLoader(true));
        const meals = await HttpService.get<IMeals[]>('/meals');

        dispatch(mealsActions.getAllMeals(meals));

    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }

};

export const getMealById = async (id: string, dispatch: AppDispatch): Promise<void> => {

    try {
        dispatch(loaderActions.changeLoader(true));
        const meal = await HttpService.get<IMeals>(`/meals/${id}`);

        dispatch(mealsActions.getById(meal));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }
};
