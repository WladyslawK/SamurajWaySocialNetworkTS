import React from "react";
import {sendNewMessage, updateNewMessageText} from "../../Redux/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapDispatchToPropsType = {
    updateNewMessageText: (newText: string) => void
    sendNewMessage: () => void
}

export type DialogsContainerType = MapDispatchToPropsType & ReturnType <typeof mapStateToProps>

const AuthRedirectProfileComponent = withAuthRedirect(Dialogs)

const mapStateToProps = (state: ReduxStateType) => ({
    dialogsData: state.dialogsPageReducer.dialogsData,
    messagesData: state.dialogsPageReducer.messagesData,
    newMessageText: state.dialogsPageReducer.newMessageText,
    isAuth: state.authReducer.isAuth
})

export const DialogsContainer = connect(mapStateToProps, {updateNewMessageText, sendNewMessage})(AuthRedirectProfileComponent)