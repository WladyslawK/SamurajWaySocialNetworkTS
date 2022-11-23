import React from "react";
import {sendNewMessage, updateNewMessageText} from "../../Redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapDispatchToPropsType = {
    updateNewMessageText: (newText: string) => void
    sendNewMessage: () => void
}

export type DialogsContainerType = MapDispatchToPropsType & ReturnType <typeof mapStateToProps>

const AuthRedirectProfileComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state: ReduxStateType) => ({
    dialogsData: state.dialogsPageReducer.dialogsData,
    messagesData: state.dialogsPageReducer.messagesData,
})

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {updateNewMessageText, sendNewMessage}),
    withAuthRedirect)(Dialogs)