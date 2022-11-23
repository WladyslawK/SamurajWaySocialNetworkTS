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
    userProfile: UsersProfileType | null
    status: string | null
}

export type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData:  MessageType[]
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
    status: string | null
    userProfile: UsersProfileType | null
    updateStatus: (status: string) => void
}

export type DialogsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
    updateNewMessageText: (text: string) => void
    sendNewMessage: (message: string) => void
}

export type MyPostsContainerType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: any) => void
}

export type MyPostsType = {
    postsData: PostType[]
    addPost: (newPost: string) => void
}

// export type ActionType = {
//     type: string
// }


/*
export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof addNewMessageActionCreator> | ReturnType<typeof updateNewMessageTextActionCreator>
*/
