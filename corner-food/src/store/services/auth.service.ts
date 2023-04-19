import { HttpService } from 'api/http-service';

import { ILogin, ISignUp } from 'store/types/auth';

export const createUser = async (body: ISignUp): Promise<void> => {
    await HttpService.post('/users', body);
};

export const getToken = async (body: ILogin): Promise<void> => {
    const token = await HttpService.post('/login', body);

    console.log(token);
};
