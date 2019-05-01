import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import createSagaMiddleware  from 'redux-saga';
import { getNewTaco } from '../src/sagas/taco-saga';
import { reducer } from '../src/dux/taco-dux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        taco: reducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(getNewTaco);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
