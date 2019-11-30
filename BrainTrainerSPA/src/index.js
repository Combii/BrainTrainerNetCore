import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BrainTrainer from './BrainTrainer';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import Provider from "react-redux/es/components/Provider";
import braintrainer from "./store/reducers/braintrainer";
import thunk from 'redux-thunk';
import auth from './store/reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({braintrainer,auth})

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
);



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BrainTrainer/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

