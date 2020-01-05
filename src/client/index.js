import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import App from './App';
import createStore from './store';

const store = createStore(window.location.hostname, window.location.href, {enableLogger: true});

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

const jsx = (
    <ReduxProvider store={store}>
        <StyleContext.Provider value={{ insertCss }}>
            <HelmetProvider>
                <App/>
            </HelmetProvider>
        </StyleContext.Provider>
    </ReduxProvider>
);
ReactDOM.hydrate(jsx, document.getElementById('root'));
