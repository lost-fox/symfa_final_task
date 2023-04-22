import { HttpService } from 'api/http-service';

import { IOrder } from 'store/types/order';

export const createOrder = async (body: IOrder) => HttpService.post('/order', body);
