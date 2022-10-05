import {ProfilePageType} from "../consts vs types/types";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";
import {ActionsType} from "./redux-store";

let initialState = {
    postsData: [
        {id: 1, text: "Hi", likesCount: 12},
        {id: 2, text: "How are you?", likesCount: 11},
    ],
    newPostText: "IT",
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case ADD_POST:
            return {postsData: [{id: 6, text: state.newPostText, likesCount: 0}, ...state.postsData], newPostText: ""}
        default:
            return state
    }
}

export type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>

export type updateNewPostTextActionCreator = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)