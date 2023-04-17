import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store/store';

import { ThemeContextProvider } from './app/theme/ThemeContext';
import { App } from './app';

import './app/styles/style.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <ThemeContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeContextProvider>
        </ReduxProvider>

    </React.StrictMode>,
);
