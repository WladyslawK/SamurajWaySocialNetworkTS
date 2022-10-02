import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {AppType} from "./consts vs types/types";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";





export const App: React.FC<AppType> = ({state, dispatch}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Route path={"/profile"} render={() => <Profile profilePage={state.profilePageReducer} dispatch={dispatch}/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer state={state.dialogsPageReducer} dispatch={dispatch} />}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                </div>


            </div>
        </BrowserRouter>
    );
}
