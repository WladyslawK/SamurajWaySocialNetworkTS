import {ActionType, StateType} from "../consts vs types/types";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";

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
                {id: 1, name: "Hello"},
                {id: 2, name: "How is your progress?"},
                {id: 3, name: "Keep going"},
            ],
            newMessageText: ""
        }
    },

    getState(){
        return this._state
    },

    _callSubscriber(state: StateType){
        console.log("rerender")
    },

    subscriber(observer: (state: StateType) => void){
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

    dispatch(action: ActionType){
        if(action.type === ADD_POST){
                this._state.profilePage.postsData.unshift({id:5, text: this._state.profilePage.newPostText, likesCount: 0})
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            if(action.text)this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, text: newText})
