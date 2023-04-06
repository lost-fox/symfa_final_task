import { memo } from 'react';

import { AppRouter } from './router/AppRouter';

import './app.scss';

export const App = memo(() => (
    <div className="wrapper">
        <AppRouter/>
    </div>
));

App.displayName = 'App';
