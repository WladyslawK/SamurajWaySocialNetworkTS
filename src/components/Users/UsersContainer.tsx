import React from 'react';
import {connect} from "react-redux";
import {UsersOptionalFunctionalComponent} from "./Users(optionalFunctionalComponent)";
import {AppDispatch, ReduxStateType} from "../../Redux/redux-store";
import {
    changeCurrentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUserStateAC,
    unfollowAC,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";

const mapStateToProps = (state: ReduxStateType) => {

    return {
        users: state.usersReducer.users,
        totalUsersCount: state.usersReducer.totalUsersCount,
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsersState: (users: UsersType []) => {
            dispatch(setUserStateAC(users))
        },
        setCurrentPage: (page: number) => {
          dispatch(changeCurrentPageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)