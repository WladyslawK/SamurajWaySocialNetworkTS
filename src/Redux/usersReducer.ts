import {usersAPI} from "../api/usersAPI";
import {AppDispatch} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_STATE = "SET-STATE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE"
const SET_FETCHING = "FETCHING-IN-PROGRESS"
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS"


export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}

export type UsersPageType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: true} : user)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId ? {...user, followed: false} : user)
            }
        case SET_STATE:
            return {...state, users: action.payload.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.count}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.payload.page}
        case SET_FETCHING:
            return {...state, isFetching: action.payload.value}
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.progress ? [...state.followingInProgress, action.payload.id] : state.followingInProgress.filter(id => id != action.payload.id)
            }
        default:
            return state
    }
}

export type UsersActionsType =
    FollowACType
    | UnfollowACType
    | SetUserStateType
    | setTotalUsersCountACType
    | changeCurrentPageACType
    | setFetchingACType
    | setFollowingInProgressType

type FollowACType = ReturnType<typeof followSuccess>
export const followSuccess = (userId: number) => {
    return {
        type: FOLLOW,
        payload: {
            userId
        }
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userId: number) => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    } as const
}

type SetUserStateType = ReturnType<typeof setUsersState>
export const setUsersState = (users: UsersType[]) => {
    return {
        type: SET_STATE,
        payload: {
            users
        }
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {count}
    } as const
}

type changeCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: {
            page
        }
    } as const
}

type setFetchingACType = ReturnType<typeof setDataFetching>
export const setDataFetching = (value: boolean) => {
    return {
        type: SET_FETCHING,
        payload: {
            value
        }
    } as const
}

type setFollowingInProgressType = ReturnType<typeof setFollowingInProgress>
export const setFollowingInProgress = (progress: boolean, id: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    payload: {progress, id}
} as const)

export const getUsers = (currentPage: number) => (Dispatch: AppDispatch) => {
    Dispatch(setDataFetching(true))

    usersAPI.getUsers(currentPage)
        .then(response => {
            console.log("Users: ", response)
            Dispatch(setCurrentPage(currentPage))
            Dispatch(setDataFetching(false))
            Dispatch(setUsersState(response.items))
            Dispatch(setTotalUsersCount(response.totalCount))
        })


}

export const unfollow = (userId: number) => (Dispatch: AppDispatch) => {
    Dispatch(setFollowingInProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                Dispatch(unfollowSuccess(userId))
                Dispatch(setFollowingInProgress(false, userId))
            }
        })
}

export const follow = (userId: number) => (Dispatch: AppDispatch) => {
    Dispatch(setFollowingInProgress(true, userId))
    usersAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                Dispatch(followSuccess(userId))
                Dispatch(setFollowingInProgress(false, userId))
            }
        })


}



