import { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ROUTES } from 'utils/constants/routes.enum';

interface IRequireAuthProps {
    children: ReactElement;
}

export const AlreadyAuth = ({ children }: IRequireAuthProps) => {
    const matched = document.cookie.includes('Token');
    const location = useLocation();

    if (matched) {
        return <Navigate to={ROUTES.HOME} state={{ from: location }} replace />;
    }

    return children;
    // const auth = document.cookie.replace(/Token=/g, '');
};
