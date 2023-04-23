import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { Navbar } from 'components/components/Navbar';
import { useAppSelector } from 'store/rootReducer';
import { getUserById } from 'store/services';
import { useAppDispatch } from 'store/store';
import { ROUTES } from 'utils/constants/routes.enum';

interface IDecodeToken {
    exp: number;
    iat: number;
    userName: string;
    sub: string;
}

export const MainLayout = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const { user } = useAppSelector(state => state);

    const auth = document.cookie.replace(/Token=/g, '');

    if (auth && !user.user) {
        const decode: IDecodeToken = jwtDecode(auth);

        getUserById(decode.sub, dispatch);
    }

    return (
        <div>
            {children}
            {
                location.pathname.length < 25
            &&  location.pathname !== ROUTES.ORDER
                    ? <Navbar/>
                    : ''
            }
        </div>
    );
};
