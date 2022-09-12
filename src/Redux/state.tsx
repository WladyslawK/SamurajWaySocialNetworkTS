import {StateType} from "../types";

export let state = {
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
}

export const subscriber = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer // pattern observer / publisher subscriber
}
let rerenderEntireTree: (state: StateType) => void

export const addPost = (text: string) => {
    state.profilePage.postsData.unshift({id:5, text, likesCount: 0})
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const changePostText = (text: string) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}
console.log(state.profilePage.postsData)
