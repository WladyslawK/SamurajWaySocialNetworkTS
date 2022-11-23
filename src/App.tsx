import React from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {AppType} from "./consts vs types/types";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContiner";
import Login from "./components/login/Login";



export const App: React.FC<AppType> = ({state, dispatch}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/profile/:userid?"}
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"} render={() =>
                        <DialogsContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
