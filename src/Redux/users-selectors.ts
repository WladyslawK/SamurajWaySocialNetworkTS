import {ReduxStateType} from "./redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./usersReducer";

const takeUsersSelector = (state: ReduxStateType) => {
    return state.usersReducer.users
}

export const takeUsers = createSelector(takeUsersSelector, (users: UsersType[]) => {
    return users.filter(user => true)
})

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