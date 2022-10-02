import React from "react";
import {DialogsContainerType} from "../../consts vs types/types";
import {addNewMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer: React.FC<DialogsContainerType> = ({state, dispatch}) => {

    const updateNewMessage = (text: string) => dispatch(updateNewMessageTextAC(text))

    const sendNewMessage = () => dispatch(addNewMessageAC())


    //UI
    return (
        <>
            <Dialogs
                dialogsData={state.dialogsData}
                messagesData={state.messagesData}
                newMessageText={state.newMessageText}
                sendNewMessage={sendNewMessage}
                updateNewMessText={updateNewMessage}
            />
        </>

    )
}