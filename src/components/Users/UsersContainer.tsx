import React from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
    follow, getUsers, unfollow,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";



type UsersAPIComponentType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
    isFetching: boolean
    FollowingInProgress: number[]
    getUsers: (currentPage: number) => void
}

class UsersAPIContainer extends React.Component<UsersAPIComponentType, {}> {
    constructor(props: UsersAPIComponentType) {
        super(props);
    }

    componentDidMount() {
        /*this.props.setDataFetching(true)

        API.getUsers(this.props.currentPage)
            .then(response => {
                console.log("Users: ", response)
                this.props.setDataFetching(false)
                this.props.setUsersState(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })*/
        this.props.getUsers(this.props.currentPage)
    }

    changePage = (page: number) => {
        this.props.getUsers(page)
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
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            followUser={this.props.follow}
                            changePage={this.changePage}
                            unfollowUser={this.props.unfollow}
                            FollowingInProgress={this.props.FollowingInProgress}
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
    getUsers,
    unfollow,
    follow
})(UsersAPIContainer)