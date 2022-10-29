import React from 'react';
import style from "./Header.module.css"
import logo from "./../../assets/images/logo.png"
import {AuthProfileType} from "../../Redux/auth-reducer";

type HeaderType = {
    authData: AuthProfileType
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
                    {login ? login : "not Logged in"}
                </div>
            </header>
        </>
    );
};

export default Header;