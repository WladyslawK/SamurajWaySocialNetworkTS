import React from 'react';
import {connect} from "react-redux";
import {ReduxStateType} from "../../Redux/redux-store";
import {
     followUser, setCurrentPage, setDataFetching, setTotalUsersCount, setUsersState, unfollowUser,
    UsersType
} from "../../Redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";


type UsersAPIComponentType = {
    users: UsersType[]
    totalUsersCount: number
    pagesCount: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsersState: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    currentPage: number
    setTotalUsersCount: (count: number) => void
    isFetching: boolean
    setDataFetching: (value: boolean) => void
}

class UsersAPIContainer extends React.Component<UsersAPIComponentType, {}> {
    constructor(props: UsersAPIComponentType) {
        super(props);
    }

    componentDidMount() {
        this.props.setDataFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
            .then(response => {
                console.log(response)
                this.props.setDataFetching(false)
                this.props.setUsersState(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    changePage = (page: number) => {
        this.props.setDataFetching(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then(response => {
                this.props.setDataFetching(false)
                this.props.setUsersState(response.data.items)
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
                            pagesCount={this.props.pagesCount}
                            currentPage={this.props.currentPage}
                            followUser={this.props.followUser}
                            changePage={this.changePage}
                            unfollowUser={this.props.unfollowUser}/>
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
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
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
    setDataFetching
})(UsersAPIContainer)