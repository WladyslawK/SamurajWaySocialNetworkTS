import React from 'react';
import style from "./Users.module.css";
import axios from "axios";
import {UsersPageType, UsersType} from "../../Redux/usersReducer";

type UsersComponentType = {
    users: UsersType[]
    totalUsersCount: number
    pagesCount: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsersState: (users: UsersType[]) => void
    setCurrentPage: (page: number) => void
    currentPage: number
    setTotalUsersCount: (count: number) => void
}

export class Users extends React.Component<UsersComponentType, {}> {
    constructor(props: UsersComponentType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
            .then(response => {
                console.log(response)
                this.props.setUsersState(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    changePage = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`)
            .then(response => {
                this.props.setUsersState(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pagesCount)
        const pagination: Array<number> = []

        for (let i = 1; i <= pagesCount; i++) {
            pagination.push(i)
        }

        const firstpage = <span
            className={pagination[0] === this.props.currentPage ? `${style.selected} ${style.span}` : `${style.span}`}
            onClick={() => {
                this.changePage(pagination[0])
            }}>{pagination[0]}</span>

        const lastpage = <span
            className={pagination[pagination.length - 1] === this.props.currentPage ? `${style.selected} ${style.span}` : `${style.span}`}
            onClick={() => {
                this.changePage(pagination[pagination.length - 1])
            }}>{pagination[pagination.length - 1]}</span>

        let pages: Array<number> = this.props.currentPage === 1 ? pagination.slice(0, 3) : pagination.slice(this.props.currentPage - 2, (this.props.currentPage - 1) + 2)


        let pagesElements = pages.map((element, i) =>
            <span
                key={i}
                className={element === this.props.currentPage ? `${style.selected} ${style.span}` : `${style.span}`}
                onClick={() => {
                    this.changePage(element)
                }}>{element}</span>)

        console.log(pages)
        return (
            <div>
                <div>

                    {
                        this.props.currentPage <= 2 ?
                            <>
                                {pagesElements}
                                <span>...</span>
                                {lastpage}
                            </> :
                            this.props.currentPage >= pagination[pagination.length - 2] ?
                                <>
                                    {firstpage}
                                    <span>...</span>
                                    {pagesElements}
                                </> :
                                <>
                                    {firstpage}
                                    <span>...</span>
                                    {pagesElements}
                                    <span>...</span>
                                    {lastpage}
                                </>
                    }


                </div>
                {
                    this.props.users && this.props.users.map(user => {
                        return (
                            <div className={style.userContainer} key={user.id}>
                            <span>
                                {user.photos.small !== null ? user.photos.small : <img
                                    src="https://tork.news/__export/1659017759401/sites/tork/img/2022/07/28/jason-statham-1200.jpg_718194491.jpg"
                                    alt="avatar"/>}

                            </span>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
                                        : <button onClick={() => this.props.followUser(user.id)}>Follow</button>}
                                </div>
                                <div>
                                    <div>{user.name}</div>
                                    <div>{"user.location.city"} <br/> {"user.location.country"}</div>
                                    <div>{user.status}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

};
