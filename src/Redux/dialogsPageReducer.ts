import {DialogsPageType, DialogType, MessageType} from "../consts vs types/types";
import {ADD_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../consts vs types/constants";
import {ActionsType} from "./redux-store";


let initialState = {
    dialogsData: [
        {id: 1, name: "Andrew"},
        {id: 2, name: "Mike"},
        {id: 3, name: "Dmytro"},
        {id: 4, name: "Alex"},
        {id: 5, name: "Albert"},
    ],
    messagesData: [
        {id: 1, text: "Hello"},
        {id: 2, text: "How is your progress?"},
        {id: 3, text: "Keep going"},
    ],
    newMessageText: ""
}


export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionsType) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
             return {...state, newMessageText: action.newText}
        case ADD_NEW_MESSAGE:
            return {...state, messagesData: [...state.messagesData, {id: 6, text: state.newMessageText}], newMessageText: ""}
        default:
            return state
    }
}

export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export type addNewMessageACType = ReturnType<typeof sendNewMessageAC>

export const updateNewMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const)

export const sendNewMessageAC = () => ({type: ADD_NEW_MESSAGE} as const)