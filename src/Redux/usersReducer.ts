const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_STATE = "SET-STATE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE"


export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: { small: string | null, large: string | null }
    status: string | null
    followed: boolean
}

export type     UsersPageType = {
    users: UsersType[]
    totalUsersCount: number
    pagesCount: number
    currentPage: number
}

const initialState = {
    users: [],
    totalUsersCount: 0,
    pagesCount: 10,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersActionsType) => {
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
        default:
            return state
    }
}

export type UsersActionsType = FollowACType | UnfollowACType | SetUserStateType | setTotalUsersCountACType | changeCurrentPageACType

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

type SetUserStateType = ReturnType<typeof setUserStateAC>
export const setUserStateAC = (users: UsersType[]) => {
    return {
        type: SET_STATE,
        payload: {
            users
        }
    } as const
}

type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (count: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {count}
    } as const
}

type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
export const changeCurrentPageAC = (page: number) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: {
            page
        }
    }as const
}





