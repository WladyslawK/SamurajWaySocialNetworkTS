import {ReduxStateType} from "./redux-store";

export const takeUsers = (state: ReduxStateType) => {
    return state.usersReducer.users
}

export const getTotalUsersCount = (state: ReduxStateType) => {
    return state.usersReducer.totalUsersCount
}

export const getPageSize = (state: ReduxStateType) => {
    return state.usersReducer.pageSize
}

export const getCurrentPage = (state: ReduxStateType) => {
    return state.usersReducer.currentPage
}

export const getIsFetching = (state: ReduxStateType) => {
    return state.usersReducer.isFetching
}

export const getFollowingInProgress = (state: ReduxStateType) => {
    return state.usersReducer.followingInProgress
}