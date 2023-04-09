import { Route, Routes } from 'react-router-dom';

import { Favorite } from 'pages/Favorite';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { SignUp } from 'pages/SignUp';
import { ROUTES } from 'utils/constants/routes.enum';

export const AppRouter = () => (
    <Routes>
        <Route path={ROUTES.LOGIN} element={<Login/>} />
        <Route path={ROUTES.SIGNUP} element={<SignUp/>} />
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.FAVORITE} element={<Favorite/>} />
    </Routes>
);
