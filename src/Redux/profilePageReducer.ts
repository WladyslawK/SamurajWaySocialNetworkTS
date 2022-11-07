import {ProfilePageType} from "../consts vs types/types";
import {ADD_POST, SET_USER_PROFILE, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";
import {ActionsType, AppDispatch} from "./redux-store";
import {API} from "../api/api";

type ContactsType = {
    facebook: string
    github: string
    mainLink: string
    youtube: string
    website: string
    vk: string
    twitter: string
    instagram: string
}

type PhotosType = {
    small: string
    large: string
}

export type UsersProfileType = {
    userId: number
    aboutMe: string
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType
    contacts: ContactsType
}


let initialState = {
    postsData: [
        {id: 1, text: "Hi", likesCount: 12},
        {id: 2, text: "How are you?", likesCount: 11},
    ],
    newPostText: "IT",
    userProfile: null
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsType): ProfilePageType => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload.newText}
        case ADD_POST:
            return {...state, postsData: [{id: 6, text: state.newPostText, likesCount: 0}, ...state.postsData], newPostText: ""}
        case SET_USER_PROFILE:
            return {
                ...state, userProfile: action.payload.profile
            }
        default:
            return state
    }
}

export type ProfilePageActionsType = addPostActionCreatorType | updateNewPostTextActionCreator | setUserProfileType

type addPostActionCreatorType = ReturnType<typeof addPost>

type updateNewPostTextActionCreator = ReturnType<typeof updateNewPostText>

export const addPost = () => ({type: ADD_POST} as const)

export const updateNewPostText = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, payload: {newText}} as const)

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UsersProfileType) => ({type: SET_USER_PROFILE, payload: {profile}} as const)


export const getProfile = (id: number, adminId: number) => {
    return (Dispatch: AppDispatch) => {
        let userId = id
        if(!userId){
            userId = adminId
        }
        API.getProfile(userId)
            .then(response => {
                Dispatch(setUserProfile(response.data))
            })
    }
}