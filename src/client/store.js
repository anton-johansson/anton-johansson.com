import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import getLanguageCode from './services/get-language-code';

const reducer = combineReducers({
    config: (state = {}) => state,
    test1: (state = {}) => state,
});

const getInitialState = hostname => ({
    config: {
        languageCode: getLanguageCode(hostname),
    }
});
const composeMiddlewares = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (hostname, {enableLogger}) => {
    const middleware = enableLogger ? applyMiddleware(logger) : applyMiddleware();
    return createStore(reducer, getInitialState(hostname), composeMiddlewares(middleware));
}
