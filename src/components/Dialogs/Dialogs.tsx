import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";

export const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                <Dialog name={"Andrew"} path={"/dialogs/1"}/>
                <Dialog name={"Mike"} path={"/dialogs/2"}/>
                <Dialog name={"Dmytro"} path={"/dialogs/3"}/>
                <Dialog name={"Alex"} path={"/dialogs/4"}/>
                <Dialog name={"Albert"} path={"/dialogs/5"}/>
            </div>
            <div className={styles.dialogs__messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your progress?"}/>
                <Message message={"Keep going!"}/>
            </div>
        </div>
    )
}