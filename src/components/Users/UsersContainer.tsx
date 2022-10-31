import React from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
    followUser,
    setCurrentPage,
    setDataFetching,
    setFollowingInProgress,
    setTotalUsersCount,
    setUsersState,
    unfollowUser,
    UsersType
} from "../../Redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {API} from "../../api/api";


type UsersAPIComponentType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsersState: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    currentPage: number
    setTotalUsersCount: (count: number) => void
    isFetching: boolean
    setDataFetching: (value: boolean) => void
    FollowingInProgress: number[],
    setFollowingInProgress: (progress: boolean, id: number) => void
}

class UsersAPIContainer extends React.Component<UsersAPIComponentType, {}> {
    constructor(props: UsersAPIComponentType) {
        super(props);
    }

    componentDidMount() {
        this.props.setDataFetching(true)

        API.getUsers(this.props.currentPage)
            .then(response => {
                console.log("Users: ", response)
                this.props.setDataFetching(false)
                this.props.setUsersState(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    changePage = (page: number) => {
        this.props.setDataFetching(true)
        this.props.setCurrentPage(page)

        API.getUsers(page)
            .then(response => {
                this.props.setDataFetching(false)
                this.props.setUsersState(response.items)
            })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching ?
                        <Preloader/>
                        : <Users
                            users={this.props.users}
                            totalUsersCount={this.props.totalUsersCount}
                            setTotalUsersCount={this.props.setTotalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            followUser={this.props.followUser}
                            changePage={this.changePage}
                            unfollowUser={this.props.unfollowUser}
                            FollowingInProgress={this.props.FollowingInProgress}
                            setFollowingInProgress={this.props.setFollowingInProgress}
                        />
                }
            </>


        )
            ;
    }

};

const mapStateToProps = (state: ReduxStateType) => {

    return {
        users: state.usersReducer.users,
        totalUsersCount: state.usersReducer.totalUsersCount,
        pageSize: state.usersReducer.pageSize,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        FollowingInProgress: state.usersReducer.followingInProgress
    }
}

/*const mapDispatchToProps = (dispatch: AppDispatch) => {
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
        },
        setDataFetching: (value: boolean) => {
            dispatch(setFetchingAC(value))
        }
    }
}*/

export const UsersContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsersState,
    setCurrentPage,
    setTotalUsersCount,
    setDataFetching,
    setFollowingInProgress
})(UsersAPIContainer)