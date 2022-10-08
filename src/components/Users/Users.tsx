import React from 'react';
import {UsersPageType, UsersType} from "../../Redux/usersReducer";
import style from "./Users.module.css"

type UsersComponentType = {
    usersInfo: UsersType[]
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
}

export const Users: React.FC<UsersComponentType> = ({usersInfo, followUser, unfollowUser}) => {




    return (
        <div>
            {
                usersInfo && usersInfo.map(user => {
                    return (
                        <div className={style.userContainer} key={user.userId}>
                            <span>
                                <img
                                    src="https://tork.news/__export/1659017759401/sites/tork/img/2022/07/28/jason-statham-1200.jpg_718194491.jpg"
                                    alt="avatar"/>
                            </span>
                            <div>
                                {user.followed
                                    ? <button onClick={() => unfollowUser(user.userId)}>Unfollow</button>
                                    : <button onClick={() => followUser(user.userId)}>Follow</button>}
                            </div>
                            <div>
                                <div>{user.userFirstName} {user.userSecondName}</div>
                                <div>{user.location.city} {user.location.country}</div>
                                <div>{user.status}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};