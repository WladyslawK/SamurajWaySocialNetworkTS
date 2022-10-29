import React from 'react';
import style from './Users.module.css';
import {UsersType} from '../../Redux/usersReducer';
import userLogo from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";

type UsersComponentType = {
    users: UsersType[]
    totalUsersCount: number
    pagesCount: number
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    currentPage: number
    setTotalUsersCount: (count: number) => void
    changePage: (page: number) => void
}

export const Users: React.FC<UsersComponentType> = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount)
    const pagination: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pagination.push(i)
    }

    const firstPage = <span
        className={pagination[0] === props.currentPage ? `${style.selected} ${style.span}` : `${style.span}`}
        onClick={() => {
            props.changePage(pagination[0])
        }}>{pagination[0]}</span>

    const lastPage = <span
        className={pagination[pagination.length - 1] === props.currentPage ? `${style.selected} ${style.span}` : `${style.span}`}
        onClick={() => {
            props.changePage(pagination[pagination.length - 1])
        }}>{pagination[pagination.length - 1]}</span>

    let pages: Array<number> = props.currentPage === 1 ? pagination.slice(0, 3) : pagination.slice(props.currentPage - 2, (props.currentPage - 1) + 2)


    let pagesElements = pages.map((element, i) =>
        <span
            key={i}
            className={element === props.currentPage ? `${style.selected} ${style.span}` : `${style.span}`}
            onClick={() => {
                props.changePage(element)
            }}>{element}</span>)


    return (
        <div>
            <div>

                {
                    props.currentPage <= 2 ?
                        <>
                            {pagesElements}
                            <span>...</span>
                            {lastPage}
                        </> :
                        props.currentPage >= pagination[pagination.length - 2] ?
                            <>
                                {firstPage}
                                <span>...</span>
                                {pagesElements}
                            </> :
                            <>
                                {firstPage}
                                <span>...</span>
                                {pagesElements}
                                <span>...</span>
                                {lastPage}
                            </>
                }


            </div>
            {
                props.users && props.users.map(user => {
                    return (
                        <div className={style.userContainer} key={user.id}>
                            <NavLink to={"/profile/" + user.id}>
                                {
                                    user.photos.small !== null ?
                                        <img src={user.photos.small} alt="logo"/> :
                                        <img src={userLogo} alt="avatar"/>
                                }

                            </NavLink>
                            <div>
                                {user.followed
                                    ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                                    : <button onClick={() => props.followUser(user.id)}>Follow</button>}
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
};