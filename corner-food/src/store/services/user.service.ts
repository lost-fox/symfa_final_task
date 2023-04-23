import { HttpService } from 'api/http-service';

import { loaderActions, userActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { IMeals } from 'store/types/meals';
import { IUser } from 'store/types/user';

export const getUserById = async (id: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(loaderActions.changeLoader(true));
        const user = await HttpService.get<IUser>(`/users/${id}`);

        dispatch(userActions.getUser(user));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }
};

export const updateUser = async (id: string,  body: IUser): Promise<void> => {
    await HttpService.patch(`/users/${id}`, body);
};

export const getFavoriteMealUser = async (id: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(loaderActions.changeLoader(true));
        const meals: IMeals[] = await HttpService.get(`/users/${id}/favorite`);

        dispatch(userActions.getFavorite(meals));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }
};

export const favoriteMealUser = async (id: string,  mealId: string, dispatch: AppDispatch):Promise<void> => {
    await HttpService.patch(`/users/${id}/favorite`, { mealId });
    await getUserById(id, dispatch);
};

export const deleteUser = async (id: string, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(loaderActions.changeLoader(true));
        await HttpService.delete(`/users/${id}`);

        dispatch(userActions.logout);
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }
};
