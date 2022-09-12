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
    name: string
}

//typification for state

type ProfilePageType = {
    postsData: PostType[]
    newPostText: string
}

type DialogsPageType = {
    dialogsData: DialogType[]
    messagesData:  MessageType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AppType = {
    state: StateType
    addPost: (newPost: string) => void
    changePostText: (text: string) => void
}

export type ProfileType = {
    profilePage: ProfilePageType
    addPost: (newPost: string) => void
    changePostText: (text: string) => void
}

export type DialogsType = {
    state: DialogsPageType
}

export type MyPostsType = {
    postsData: PostType[]
    addPost: (newPost: string) => void
    newPostText: string
    changePostText: (text: string) => void
}