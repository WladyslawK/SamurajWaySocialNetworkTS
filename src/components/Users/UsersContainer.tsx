import React from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
    follow, getUsers, unfollow,
    UsersType
} from "../../Redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    takeUsers
} from "../../Redux/users-selectors";


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
        );
    }

};

const mapStateToProps = (state: ReduxStateType) => {

    return {
        users: takeUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        FollowingInProgress: getFollowingInProgress(state)
    }
}

/*export const UsersContainer = connect(mapStateToProps, {
    getUsers,
    unfollow,
    follow
})(UsersAPIContainer)*/

export const UsersContainer = compose<React.ComponentType>(
    //withAuthRedirect,
    connect(mapStateToProps, {
        getUsers,
        unfollow,
        follow
    })
)(UsersAPIContainer)