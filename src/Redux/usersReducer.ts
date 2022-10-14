const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_STATE = "SET-STATE"



export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null}
    status: string | null
    followed: boolean
}

export type UsersPageType = {
    users: UsersType[]
}

const initialState: UsersPageType ={
    users: [
        {
            id: 1,
            uniqueUrlName: null,
            followed: true,
            name: "Andrew",
            photos: {small: "null", large: "null"},
            status: "Front End Developer",
        },
        {
            id: 2,
            uniqueUrlName: null,
            followed: false,
            name: "Jan",
            photos: {small: "null", large: "null"},
            status: "Front End Developer"
        },
        {
            id: 3,
            uniqueUrlName: null,
            followed: true,
            name: "Aleksandr",
            photos: {small: "null", large: "null"},
            status: "Front End Developer"
        },
        {
            id: 4,
            uniqueUrlName: null,
            followed: false,
            name: "Pawel",
            photos: {small: "null", large: "null"},
            status: "Front End Developer"
        },
    ]
}

export const usersReducer = (state: UsersPageType = {users: []}, action: UsersActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => user.id === action.payload.userId  ? {...user, followed: true} : user)}
        case UNFOLLOW:
            return {...state, users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)}
        case SET_STATE:
            return {...state, users: [...state.users, ...action.payload.users]}
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnfollowACType | SetUserStateType

type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

type SetUserStateType = ReturnType<typeof setUserState>
export const setUserState = (users: UsersType[]) => {
    return {
        type: SET_STATE,
        payload: {
            users
        }
    } as const
}




