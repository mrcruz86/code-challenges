import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './reducers';
import { App } from './components';
import { FavoriteItemList, AvailableFilters, ErrorMessage } from './containers';
import { getFilters } from './actions';

import './index.scss';

const loggerMiddleware = logger();

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(getFilters());

ReactDOM.render(
    <Provider store={store}>
        <App >
            <AvailableFilters />
            <FavoriteItemList />
            <ErrorMessage />
        </App>
    </Provider>,
    document.getElementById('root')
);
