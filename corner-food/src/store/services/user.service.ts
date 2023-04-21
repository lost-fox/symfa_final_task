import { HttpService } from 'api/http-service';

import { userActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { IUser } from 'store/types/user';

export const getUserById = async (id: string, dispatch: AppDispatch): Promise<void> => {
    const user = await HttpService.get<IUser>(`/users/${id}`);

    dispatch(userActions.getUser(user));
};

export const updateUser = async (id: string,  body: IUser): Promise<void> => {
    await HttpService.patch(`/users/${id}`, body);
};

export const deleteUser = async (id: string, dispatch: AppDispatch): Promise<void> => {
    await HttpService.delete(`/users/${id}`);

    dispatch(userActions.logout);
};
