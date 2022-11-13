import {ProfilePageType} from "../consts vs types/types";
import {ADD_POST, SET_USER_PROFILE, SET_USER_STATUS, UPDATE_NEW_POST_TEXT} from "../consts vs types/constants";
import {AppDispatch} from "./redux-store";
import {profileAPI, usersAPI} from "../api/usersAPI";

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
    photos: PhotosType | null
    contacts: ContactsType | null
}


let initialState = {
    postsData: [
        {id: 1, text: "Hi", likesCount: 12},
        {id: 2, text: "How are you?", likesCount: 11},
    ],
    newPostText: "IT",
    userProfile: null,
    status: null
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfilePageActionsType): ProfilePageType => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.payload.newText}
        case ADD_POST:
            return {
                ...state,
                postsData: [{id: 6, text: state.newPostText, likesCount: 0}, ...state.postsData],
                newPostText: ""
            }
        case SET_USER_PROFILE:
            return {
                ...state, userProfile: {...action.payload.profile}
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export type ProfilePageActionsType =
    addPostActionCreatorType
    | updateNewPostTextActionCreator
    | setUserProfileType
    | ReturnType<typeof setUserStatus>

type addPostActionCreatorType = ReturnType<typeof addPost>

type updateNewPostTextActionCreator = ReturnType<typeof updateNewPostText>

export const addPost = () => ({type: ADD_POST} as const)

export const updateNewPostText = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, payload: {newText}} as const)

type setUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UsersProfileType) => ({type: SET_USER_PROFILE, payload: {profile}} as const)

export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, payload: {status}} as const)


export const getProfile = (userId: number) => (Dispatch: AppDispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            Dispatch(setUserProfile(response.data))
        })
}


export const getStatus = (userId: number) => (dispatch: AppDispatch) => {
    profileAPI.getStatus(userId).then(res => {
        console.log("Status: ", res)
        dispatch(setUserStatus(res.data))
    })
}

export const updateStatus = (status: string) => (dispatch: AppDispatch) => {
    profileAPI.setStatus(status).then(res => {
        if(res.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    })
}