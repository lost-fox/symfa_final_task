import { HttpService } from 'api/http-service';

import { cartActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { ICoupon } from 'store/types/cart';

interface IBody {
    value: string;
}

export const getDiscountValue = async (body: IBody, dispatch: AppDispatch) => {

    try {
        const coupon: ICoupon = await HttpService.post('/coupons', body);
        const { discount } = coupon;

        dispatch(cartActions.getDiscount(discount));
    } catch (err) {
        dispatch(cartActions.getDiscount('0%'));
    }

};
