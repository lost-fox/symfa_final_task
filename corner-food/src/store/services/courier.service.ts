import { HttpService } from 'api/http-service';

import { ICourier } from 'store/types/courier';

export const getAllCouriers = async () => HttpService.get<ICourier[]>('/couriers');
