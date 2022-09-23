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
    state: StateType
    dispatch: (action: ActionType) => void
}

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export type DialogsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

export type MyPostsType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}
export type ActionType = {
    type: string
    text?: string
}