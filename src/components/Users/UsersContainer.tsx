import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, ReduxStateType} from "../../Redux/redux-store";
import {followAC, setUserState, unfollowAC, UsersType} from "../../Redux/usersReducer";

const mapStateToProps = (state: ReduxStateType) => {

    return {
        usersInfo: state.usersReducer
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
            dispatch(setUserState(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)