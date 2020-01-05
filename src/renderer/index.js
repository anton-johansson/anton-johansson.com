import React from "react";
import ReactDOM from "react-dom/server";
import { Provider as ReduxProvider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import StyleContext from 'isomorphic-style-loader/StyleContext'
import url from 'url';
import createStore from '../client/store';
import App from '../client/App';

const getFullURL = request => {
    return url.format({
        protocol: request.protocol,
        host: request.get('host'),
        pathname: request.originalUrl,
    });
}

export default request => {
    const currentURL = getFullURL(request);
    const store = createStore(request.hostname, currentURL, {enableLogger: false});
    const css = new Set();
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
    const helmetContext = {};

    const jsx = (
        <ReduxProvider store={store}>
            <StyleContext.Provider value={{ insertCss }}>
                <HelmetProvider context={helmetContext}>
                    <App/>
                </HelmetProvider>
            </StyleContext.Provider>
        </ReduxProvider>
    );

    const reactDOM = ReactDOM.renderToString(jsx);
    const reduxState = store.getState();
    const helmet = helmetContext.helmet;

    return `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <style>${[...css].join('')}</style>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <section id="root">${reactDOM}</section>
        <script>
            window.REDUX_DATA = ${JSON.stringify(reduxState)}
        </script>
        <script src="/bundle.js"></script>
    </body>
</html>`
};