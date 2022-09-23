import {ActionType, ProfilePageType} from "../consts vs types/types";
import {ADD_POST, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";

export const profilePageReducer = (state: ProfilePageType, action: ActionType) => {
    if (action.type === UPDATE_NEW_POST_TEXT) {
        if (action.text)
            state.newPostText = action.text
    } else if (action.type === ADD_POST) {
            state.postsData.unshift({id: 5, text: state.newPostText, likesCount: 0})
        state.newPostText = ""
    }
}