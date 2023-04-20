import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

import { Navbar } from 'components/components/Navbar';
import { ROUTES } from 'utils/constants/routes.enum';

export const MainLayout = ({ children }: PropsWithChildren) => {
    const location = useLocation();

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
