import React from "react";
import {sendNewMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, ReduxStateType} from "../../Redux/redux-store";

/*export const DialogsContainer: React.FC<DialogsContainerType> = ({state, dispatch}) => {

    const updateNewMessage = (text: string) => dispatch(updateNewMessageTextAC(text))

    const sendNewMessage = () => dispatch(sendNewMessageAC())

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
}*/

const mapStateToProps = (state: ReduxStateType) => ({
    dialogsData: state.dialogsPageReducer.dialogsData,
    messagesData: state.dialogsPageReducer.messagesData,
    newMessageText: state.dialogsPageReducer.newMessageText
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
        updateNewMessText: (text: string) => dispatch(updateNewMessageTextAC(text)),
        sendNewMessage: () => dispatch(sendNewMessageAC())
    })

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)