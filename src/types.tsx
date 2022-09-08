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

//typisation for state

type ProfilePageType = {
    postsData: PostType[]
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
}

export type ProfileType = {
    state: ProfilePageType
    addPost: (newPost: string) => void
}

export type DialogsType = {
    state: DialogsPageType
}