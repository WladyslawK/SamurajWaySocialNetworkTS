import React from "react";
import styles from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./dialog/Dialog";
import {DialogsType} from "../../consts vs types/types";
import {AddMessageFormType, AddMessageReduxForm} from "./addNewMessage/AddNewMessage";



export const Dialogs: React.FC<DialogsType> = (props) => {

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

    const SubmitMessage = (data: AddMessageFormType) => {props.sendNewMessage(data.newMessage)}

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
                <AddMessageReduxForm onSubmit={SubmitMessage}/>
                {/*<textarea
                    value={props.newMessageText}
                    onChange={updateNewMessageHandler}
                    ref={newMessageReference}>
                </textarea>
                <button onClick={props.sendNewMessage}>Send</button>*/}
            </div>
        </>

    )
}