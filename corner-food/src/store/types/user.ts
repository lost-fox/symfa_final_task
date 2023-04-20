export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    address: string;
    favoriteDish: string[];
}

export interface IUserSchema {
    user: IUser | null;
}
