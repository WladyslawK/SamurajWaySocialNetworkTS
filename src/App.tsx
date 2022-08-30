import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {AppType} from "./types";




export const App: React.FC<AppType> = ({postsData, dialogsData, messagesData}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path={"/profile"} render={() => <Profile postsData={postsData}/>}/>
                    <Route path={"/dialogs"} render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                </div>


            </div>
        </BrowserRouter>
    );
}
