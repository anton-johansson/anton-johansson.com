import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import createStore from './store';

import './public/css/default.css';
import './public/css/layout.css';
import './public/css/media-queries.css';
import './public/css/magnific-popup.css';

const store = createStore(window.location.hostname, window.location.href, {enableLogger: true});

const jsx = (
    <ReduxProvider store={store}>
        <App/>
    </ReduxProvider>
);
ReactDOM.render(jsx, document.getElementById('root'));
