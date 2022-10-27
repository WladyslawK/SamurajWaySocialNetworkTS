import {ActionsType, AppDispatch, ReduxStateType, store} from "../Redux/redux-store";
import {UsersProfileType} from "../Redux/profilePageReducer";

export type PostType = {
    id: number
    text: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    text: string
}

//typification for state

export type ProfilePageType = {
    postsData: PostType[]
    newPostText: string
    userProfile: null | UsersProfileType
}

export type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData:  MessageType[]
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AppType = {
    state: ReduxStateType
    dispatch: AppDispatch

}

export type ProfileType = {
    /*profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void*/
    userProfile: UsersProfileType | null
}

export type DialogsContainerType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export type DialogsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
    updateNewMessText: (text: string) => void
    sendNewMessage: () => void
}

export type MyPostsContainerType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: any) => void
}

export type MyPostsType = {
    postsData: PostType[]
    newPostText: string
    addPost: () => void
    updateText: (text: string) => void
}

// export type ActionType = {
//     type: string
// }


/*
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator>
*/
