import React, {RefObject} from "react";
import styles from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {Dialog} from "./Dialog/Dialog";
import {DialogsType} from "../../consts vs types/types";
import {addNewMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsPageReducer";

export const Dialogs: React.FC<DialogsType> = ({state, dispatch}) => {

    const dialogElements = state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    const messagesElements = state.messagesData.map(message => <Message id={message.id} message={message.text}/>)

    const newMessageReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const changeNewMessageTextHandler = () => {
        if(newMessageReference.current?.value)
        dispatch(updateNewMessageTextAC(newMessageReference.current?.value))
    }

    const addNewMessageHandler = () => {
        dispatch(addNewMessageAC())
    }


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
                <textarea value={state.newMessageText} onChange={changeNewMessageTextHandler} ref={newMessageReference}></textarea>
                <button onClick={addNewMessageHandler}>Send</button>
            </div>
        </>

    )
}