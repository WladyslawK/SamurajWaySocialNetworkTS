import React from 'react';
import s from "./Navbar.module.css"


const Navbar = () => {
    return (
        <>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.active}`}>
                    <a href="/profile">Profile</a>
                </div>
                <div className={s.item}>
                    <a href="/dialogs">Messages</a>
                </div>
                <div className={s.item}>
                    News
                </div>
                <div className={s.item}>
                    Music
                </div>
            </nav>
        </>
    );
};

export default Navbar;