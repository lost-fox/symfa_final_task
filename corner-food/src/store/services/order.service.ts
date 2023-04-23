import { HttpService } from 'api/http-service';

import { loaderActions, userActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { IGetOrder, IOrder } from 'store/types/order';

export const createOrder = async (body: IOrder) => HttpService.post('/orders', body);

export const getAllOrders = async (id: string, dispatch: AppDispatch) => {
    try {
        dispatch(loaderActions.changeLoader(true));
        const orders = await HttpService.get<IGetOrder[]>(`/orders/${id}`);

        dispatch(userActions.getOrders(orders));
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }
};
