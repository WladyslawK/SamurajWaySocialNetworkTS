import React from 'react';
import style from "./Header.module.css"
import logo from "./../../assets/images/logo.png"
import {AuthProfileType} from "../../Redux/auth-reducer";
import {NavLink} from "react-router-dom";

type HeaderType = {
    authData: AuthProfileType
    logout: () => void
}

const Header: React.FC<HeaderType> = (props) => {
    const {userId, login, email} = props.authData
    return (
        <>
            <header className={style.header}>
                <img
                    src={logo}
                    alt="logo"/>
                <div className={style.loginContainer}>
                    {login ?
                        <>
                            <span>{login}</span>
                            <button onClick={props.logout} >Logout</button>
                        </> :
                        <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </header>
        </>
    );
};

export default Header;