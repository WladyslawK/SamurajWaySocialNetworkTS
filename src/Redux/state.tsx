import {ActionType, StateType} from "../consts vs types/types";
import {ADD_NEW_MESSAGE, ADD_POST, UPDATE_NEW_MESSAGE_TEXT, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {debuglog} from "util";

export const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "Hi", likesCount: 12},
                {id: 2, text: "How are you?", likesCount: 11},
            ],
            newPostText: "IT",
        },

        dialogsPage: {
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
    },

    getState() {
        return this._state
    },

    _callSubscriber(state: StateType) {
        console.log("rerender")
    },

    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },

    /* _addPost(text: string){
         this._state.profilePage.postsData.unshift({id:5, text, likesCount: 0})
         this._state.profilePage.newPostText = ""
         this._callSubscriber(this._state)
     },
     _changePostText(text: string){
         this._state.profilePage.newPostText = text
         this._callSubscriber(this._state)
     },*/

    dispatch(action: ActionType) {

        profilePageReducer(this._state.profilePage, action)
        dialogsPageReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, text: newText})

export const updateNewMessageTextActionCreator = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: newText})

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE})
