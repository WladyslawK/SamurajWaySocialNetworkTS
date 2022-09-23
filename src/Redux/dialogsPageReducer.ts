import {ActionType, DialogsPageType} from "../consts vs types/types";
import {ADD_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../consts vs types/constants";

export const dialogsPageReducer = (state: DialogsPageType, action: ActionType) => {
    if(action.type === UPDATE_NEW_MESSAGE_TEXT){
        if(action.text)
            state.newMessageText = action.text
    }
    else if(action.type === ADD_NEW_MESSAGE){
        state.messagesData.push({id: 6, text: state.newMessageText})
        state.newMessageText = ""
    }
}