import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContiner";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {ReduxStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {initializeApp} from "./Redux/appReducer";

type AppType = {
    initialized: boolean,
    initializeApp: () => void
}

class App extends Component<AppType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render(){
        if(!this.props.initialized){
            return <Preloader/>
        }

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

}

const mapStateToProps = (state: ReduxStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp: initializeApp})(App)
