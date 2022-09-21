import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./Redux/state";
import {StateType} from "./consts vs types/types";

const rerender = (state: StateType) => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerender(store.getState())
store.subscriber(rerender)
