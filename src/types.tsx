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

export type AppType = {
    postsData: PostType[]
    dialogsData: DialogType[]
    messagesData: MessageType[]
}

export type ProfileType = {
    postsData: PostType[]
}

export type DialogsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}