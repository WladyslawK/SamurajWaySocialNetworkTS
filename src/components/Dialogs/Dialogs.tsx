import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                <div className={styles.dialogs__item}>
                    <NavLink to={"dialogs/andrew"} activeClassName={styles.active}>Andrew</NavLink>
                </div>
                <div className={styles.dialogs__item}>
                    <NavLink to={"dialogs/mike"}>Mike</NavLink>
                </div>
                <div className={styles.dialogs__item}>
                    <NavLink to={"dialogs/dmytro"}>Dmytro</NavLink>
                </div>
                <div className={styles.dialogs__item}>
                    <NavLink to={"dialogs/alex"}>Alex</NavLink>
                </div>
                <div className={styles.dialogs__item}>
                    <NavLink to={"dialogs/albert"}>Albert</NavLink>
                </div>
            </div>
            <div className={styles.dialogs__messages}>
                <div className={styles.dialogs__message}>Hi</div>
                <div className={styles.dialogs__message}>How is your progress?</div>
                <div className={styles.dialogs__message}>Keep going!</div>
            </div>
        </div>
    )
}