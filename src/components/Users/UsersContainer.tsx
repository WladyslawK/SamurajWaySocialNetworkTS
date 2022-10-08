import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, ReduxStateType} from "../../Redux/redux-store";
import {followAC, unfollowAC, UsersType} from "../../Redux/usersReducer";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        usersInfo: state.usersReducer.users
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        followUser: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId: number) => {
            dispatch(unfollowAC(userId))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)