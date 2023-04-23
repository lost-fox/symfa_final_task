import { IMeals } from './meals';
import { IGetOrder } from './order';

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    address: string;
    favoriteDish: {
        mealId: string;
    }[];
}

export interface IUserSchema {
    user: IUser | null;
    favorite: IMeals[];
    orders: IGetOrder[];
}
