import { memo } from 'react';

import { Login } from 'pages/Login';

import './app.scss';

export const App = memo(() => (
    <div className="wrapper">
        <Login/>
    </div>
));

App.displayName = 'App';
