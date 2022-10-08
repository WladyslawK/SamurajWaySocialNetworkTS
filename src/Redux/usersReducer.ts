import {ActionsType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_STATE = "SET-STATE"



export type UsersType = {
    userId: number
    followed: boolean
    userFirstName: string
    userSecondName: string
    status: string
    location: {
        city: string
        country: string
    }
}

export type UsersPageType = {
    users: UsersType []
}

const initialState: UsersPageType ={
    users: [
        {
            userId: 1,
            followed: true,
            userFirstName: "Andrew",
            userSecondName: "Woronin",
            status: "Front End Developer",
            location: {city: "Warsaw", country: "Poland"}
        },
        {
            userId: 2,
            followed: false,
            userFirstName: "Jan",
            userSecondName: "Kowalski",
            status: "Front End Developer",
            location: {city: "Krakow", country: "Poland"}
        },
        {
            userId: 3,
            followed: true,
            userFirstName: "Aleksandr",
            userSecondName: "Szlak",
            status: "Front End Developer",
            location: {city: "Verona", country: "Italy"}
        },
        {
            userId: 4,
            followed: false,
            userFirstName: "Pawel",
            userSecondName: "Goral",
            status: "Front End Developer",
            location: {city: "Porto", country: "Portugal"}
        },
    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(user => user.userId === action.payload.userId ? {...user, followed: true} : user)}
        case UNFOLLOW:
            return {...state, users: state.users.map(user => user.userId === action.payload.userId ? {...user, followed: false} : user)}
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnfollowACType

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




