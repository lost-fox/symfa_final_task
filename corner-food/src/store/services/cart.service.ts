import { HttpService } from 'api/http-service';

import { cartActions, loaderActions } from 'store/slices';
import { AppDispatch } from 'store/store';
import { ICoupon } from 'store/types/cart';

interface IBody {
    value: string;
}

export const getDiscountValue = async (body: IBody, dispatch: AppDispatch) => {
    try {
        dispatch(loaderActions.changeLoader(true));
        const coupon: ICoupon = await HttpService.post('/coupons', body);
        const { discount } = coupon;

        dispatch(cartActions.getDiscount(discount));
    } catch (err) {
        dispatch(cartActions.getDiscount('0%'));
    } finally {
        dispatch(loaderActions.changeLoader(false));
    }
};
