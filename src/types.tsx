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

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type AppType = {
    state: StateType
}

export type ProfileType = {
    state: ProfilePageType
}

export type DialogsType = {
    state: DialogsPageType
}