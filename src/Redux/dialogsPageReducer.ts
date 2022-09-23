import {ActionType, DialogsPageType} from "../consts vs types/types";
import {ADD_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../consts vs types/constants";

export const dialogsPageReducer = (state: DialogsPageType, action: ActionType) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
             if(action.text) state.newMessageText = action.text
            return state
        case ADD_NEW_MESSAGE:
            state.messagesData.push({id: 6, text: state.newMessageText})
            state.newMessageText = ""
            break;
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: newText})

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})