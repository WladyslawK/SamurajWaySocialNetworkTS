import {ActionType, ProfilePageType} from "../consts vs types/types";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";

export const profilePageReducer = (state: ProfilePageType, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            if (action.text) state.newPostText = action.text
            break
        case ADD_POST:
            state.postsData.unshift({id: 6, text: state.newPostText, likesCount: 0})
            state.newPostText = ""
            break;
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, text: newText})