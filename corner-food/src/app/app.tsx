import { memo } from 'react';

import { SignUp } from 'pages/SignUp';

import './app.scss';

export const App = memo(() => (
    <div className="wrapper">
        <SignUp/>
    </div>
));

App.displayName = 'App';
