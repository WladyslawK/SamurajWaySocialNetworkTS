import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';


const postsData = [
    {id: 1, text: "Hi", likesCount: 12},
    {id: 2, text: "How are you?", likesCount: 11},
]

const dialogsData = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Mike"},
    {id: 3, name: "Dmytro"},
    {id: 4, name: "Alex"},
    {id: 5, name: "Albert"},
]

const messagesData = [
    {id: 1, name: "Hello"},
    {id: 2, name: "How is your progress?"},
    {id: 3, name: "Keep going"},
]

ReactDOM.render(

        <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);