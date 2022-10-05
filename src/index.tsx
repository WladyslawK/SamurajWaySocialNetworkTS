import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {ReduxStateType, store} from "./Redux/redux-store";
import {Provider} from "react-redux";

const rerender = (state: ReduxStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </Provider>, document.getElementById('root')
    );
}
rerender(store.getState())
store.subscribe(() => rerender(store.getState()))
