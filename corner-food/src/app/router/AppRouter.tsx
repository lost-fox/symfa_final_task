import { Route, Routes } from 'react-router-dom';

import { Details } from 'pages/Details';
import { Favorite } from 'pages/Favorite';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Notification } from 'pages/Notification';
import { Order } from 'pages/Order';
import { Profile } from 'pages/Profile';
import { SignUp } from 'pages/SignUp';
import { ROUTES } from 'utils/constants/routes.enum';

export const AppRouter = () => (
    <Routes>
        <Route path={ROUTES.LOGIN} element={<Login/>} />
        <Route path={ROUTES.SIGNUP} element={<SignUp/>} />
        <Route path={ROUTES.HOME} element={<Home/>} />
        <Route path={ROUTES.FAVORITE} element={<Favorite/>} />
        <Route path={ROUTES.DETAILS} element={<Details/>} />
        <Route path={ROUTES.NOTIFICATION} element={<Notification/>} />
        <Route path={ROUTES.ORDER} element={<Order/>} />
        <Route path={ROUTES.PROFILE} element={<Profile/>}/>
    </Routes>
);
