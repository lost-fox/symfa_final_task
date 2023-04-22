export interface IOrder {
    userId: string;
    total: number;
    meals: {
        name: string;
        price: number;
        count: number;
    }[];
    courier: {
        id: string;
        name: string;
    };
    start: Date;
    finish: Date;
}
