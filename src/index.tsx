import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, reRenderCallback, state} from "./Redux/state";
import {StateType} from "./types";

const rerender = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
}
rerender(state)
reRenderCallback(rerender)
