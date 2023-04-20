import { HttpService } from 'api/http-service';

import { ILogin, ISignUp } from 'store/types/auth';
import { ONE_DAY } from 'utils/constants/common';
import { IGetToken } from 'utils/interfaces/Auth.service.interface';

export const createUser = async (body: ISignUp) => HttpService.post('/users', body);

export const getToken = async (body: ILogin): Promise<IGetToken> => {
    const token: IGetToken = await HttpService.post('/login', body);
    const date = new Date(Date.now() + ONE_DAY).toUTCString();

    const { access_token: accessToken } = token;

    document.cookie = `Token=${accessToken}; expires=${date}`;

    return token;
};
