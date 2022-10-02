import {ActionType, DialogsPageType} from "../consts vs types/types";
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
    ],
    newMessageText: ""
}

export const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            //  if(action.newText) state.newMessageText = action.newText
            // return {...state}
             return {...state, newMessageText: action.newText}
        case ADD_NEW_MESSAGE:
            state.messagesData.push({id: 6, text: state.newMessageText})
            state.newMessageText = ""
            return {...state}
        default:
            return state
    }
}

export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

export type addNewMessageACType = ReturnType<typeof addNewMessageAC>

export const updateNewMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText})

export const addNewMessageAC = () => ({type: ADD_NEW_MESSAGE})