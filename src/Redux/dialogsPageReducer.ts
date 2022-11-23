import {DialogsPageType, DialogType, MessageType} from "../consts vs types/types";
import {ADD_NEW_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../consts vs types/constants";

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
    ]
}


export const dialogsPageReducer = (state: DialogsPageType = initialState, action: DialogsPageActionsType) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
             return {...state, newMessageText: action.newText}
        case ADD_NEW_MESSAGE:
            return {...state, messagesData: [...state.messagesData, {id: 6, text: action.message}]}
        default:
            return state
    }
}

export type DialogsPageActionsType = updateNewMessageTextACType | sendNewMessageACType

type updateNewMessageTextACType = ReturnType<typeof updateNewMessageText>
export const updateNewMessageText = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const)

type sendNewMessageACType = ReturnType<typeof sendNewMessage>
export const sendNewMessage = (message: string) => ({type: ADD_NEW_MESSAGE, message} as const)