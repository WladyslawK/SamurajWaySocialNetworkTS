import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";

export const Dialogs = () => {
    //BLL
    const dialogsData = [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Mike"},
        {id: 3, name: "Dmytro"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Albert"},
    ]

    const messagesData = [
        {id: 1, name: "Hello"},
        {id: 2, name: "How is your progress?"},
        {id: 3, name: "Keep going"},
    ]

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