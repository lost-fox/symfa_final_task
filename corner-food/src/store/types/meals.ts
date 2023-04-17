export interface IMeals {
    _id: string;
    name: string;
    subtitle: string;
    description: string;
    image: string;
    type: string;
    price: number;
    timeCook: number;
    rating: string;
}

export interface IMealsSchema {
    meals: IMeals[];
    meal: IMeals | null;
}
