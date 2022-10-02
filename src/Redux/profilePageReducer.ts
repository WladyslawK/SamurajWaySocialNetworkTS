import {ActionType, ProfilePageType} from "../consts vs types/types";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";

let initialState = {
    postsData: [
        {id: 1, text: "Hi", likesCount: 12},
        {id: 2, text: "How are you?", likesCount: 11},
    ],
    newPostText: "IT",
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) state.newPostText = action.newText
            return {...state}
        case ADD_POST:
            state.postsData.unshift({id: 6, text: state.newPostText, likesCount: 0})
            state.newPostText = ""
            return {...state}
        default:
            return state
    }
}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>

export type updateNewPostTextActionCreator = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText})