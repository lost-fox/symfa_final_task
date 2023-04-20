import { memo } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { AuthLayout } from 'components/layout/AuthLayout';
import { MainLayout } from 'components/layout/MainLayout';
import { Details } from 'pages/Details';
import { Favorite } from 'pages/Favorite';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Notification } from 'pages/Notification';
import { Order } from 'pages/Order';
import { Profile } from 'pages/Profile';
import { SignUp } from 'pages/SignUp';
import { ROUTES } from 'utils/constants/routes.enum';

import { AlreadyAuth } from './AlreadyAuth';
import { RequireAuth } from './RequireAuth';

const AuthRootElement = () => (
    <AlreadyAuth>
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    </AlreadyAuth>
);

const MainRootElement = () => (
    <RequireAuth>
        <MainLayout>
            <Outlet />
        </MainLayout>
    </RequireAuth>
);

export const AppRouter = memo(() => (
    <Routes>
        <Route path={ROUTES.HOME} element={<AuthRootElement />}>
            <Route path={ROUTES.LOGIN} element={<Login/>} />
            <Route path={ROUTES.SIGNUP} element={<SignUp/>} />
        </Route>

        <Route path={ROUTES.HOME} element={<MainRootElement />}>
            <Route index element={<Home/>} />
            <Route path={ROUTES.FAVORITE} element={<Favorite/>} />
            <Route path={ROUTES.NOTIFICATION} element={<Notification/>} />
            <Route path={ROUTES.ORDER} element={<Order/>} />
            <Route path={ROUTES.PROFILE} element={<Profile/>}/>
            <Route path="/:id" element={<Details/>} />
        </Route>

    </Routes>
));

AppRouter.displayName = 'AppRouter';
