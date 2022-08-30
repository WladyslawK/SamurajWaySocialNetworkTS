import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogsType} from "../../types";

export const Dialogs: React.FC<DialogsType> = ({dialogsData, messagesData}) => {

    const dialogElements = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const messagesElements = messagesData.map(message => <Message id={message.id} message={message.name}/>)

    //UI
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogElements}
            </div>
            <div className={styles.dialogs__messages}>
                {messagesElements}
            </div>
        </div>
    )
}