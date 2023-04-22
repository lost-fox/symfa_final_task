export interface ICart {
    id: string;
    name: string;
    subtitle: string;
    image: string;
    price: number;
    count: number;
}

export interface ICoupon {
    _id: string;
    value: string;
    discount: string;
    start: string;
    end: string;
}

export interface ICartSchema {
    cart: ICart[];
    discount: string;
}
