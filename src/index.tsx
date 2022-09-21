import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from "./Redux/state";
import {StateType} from "./types";

const rerender = (state: StateType) => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} changePostText={store.changePostText.bind(store)}/>,
        document.getElementById('root')
    );
}
rerender(store.getState())
store.subscriber(rerender)
