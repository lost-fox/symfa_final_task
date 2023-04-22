export interface ICart {
    id: string;
    name: string;
    subtitle: string;
    image: string;
    price: number;
    count: number;
}

export interface ICartSchema {
    cart: ICart[];
}
