import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import getLanguageCode from './services/get-language-code';

const reducer = combineReducers({
    config: (state = {}) => state,
    test1: (state = {}) => state,
});

const getInitialState = (hostname, currentURL) => ({
    config: {
        languageCode: getLanguageCode(hostname),
        currentURL: currentURL,
    }
});
const composeMiddlewares = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (hostname, currentURL, {enableLogger}) => {
    const middleware = enableLogger ? applyMiddleware(logger) : applyMiddleware();
    return createStore(reducer, getInitialState(hostname, currentURL), composeMiddlewares(middleware));
}
