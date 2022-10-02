import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {ReduxStateType, store} from "./Redux/redux-store";
import {StateType} from "./consts vs types/types";

const rerender = (state: ReduxStateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerender(store.getState())
store.subscribe(() => rerender(store.getState()))
