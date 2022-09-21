import {StateType} from "../types";

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
            ]
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

    addPost(text: string){
        this._state.profilePage.postsData.unshift({id:5, text, likesCount: 0})
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    changePostText(text: string){
        this._state.profilePage.newPostText = text
        this._callSubscriber(this._state)
    }
}
