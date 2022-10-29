import React, {RefObject} from "react";
import styles from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogsType} from "../../consts vs types/types";

export const Dialogs: React.FC<DialogsType> = (props) => {
    console.log(props)

    const dialogElements = props.dialogsData && props.dialogsData.map(dialog =>
        <Dialog
            key={dialog.id}
            name={dialog.name}
            id={dialog.id}
        />)

    const messagesElements = props.messagesData && props.messagesData.map(message =>
        <Message
            key={message.id}
            id={message.id}
            message={message.text}
        />)

    const newMessageReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const updateNewMessageHandler = () => props.updateNewMessageText(newMessageReference.current?.value as string)

    //UI
    return (
        <>
            <div className={styles.dialogs}>
                <div className={styles.dialogs__items}>
                    {dialogElements}
                </div>
                <div className={styles.dialogs__messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={styles.newMessageContainer}>
                <textarea
                    value={props.newMessageText}
                    onChange={updateNewMessageHandler}
                    ref={newMessageReference}>
                </textarea>
                <button onClick={props.sendNewMessage}>Send</button>
            </div>
        </>

    )
}