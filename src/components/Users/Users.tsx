import React from 'react';
import {UsersPageType, UsersType} from "../../Redux/usersReducer";
import style from "./Users.module.css"

type UsersComponentType = {
    usersInfo: UsersPageType
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsersState: (users: UsersType[]) => void
}

export const Users: React.FC<UsersComponentType> = ({usersInfo, followUser, unfollowUser, setUsersState}) => {

    const users = [
        {
            userId: 1,
            followed: true,
            userFirstName: "Andrew",
            userSecondName: "Woronin",
            status: "Front End Developer",
            location: {city: "Warsaw", country: "Poland"}
        },
        {
            userId: 2,
            followed: false,
            userFirstName: "Jan",
            userSecondName: "Kowalski",
            status: "Front End Developer",
            location: {city: "Krakow", country: "Poland"}
        },
        {
            userId: 3,
            followed: true,
            userFirstName: "Aleksandr",
            userSecondName: "Szlak",
            status: "Front End Developer",
            location: {city: "Verona", country: "Italy"}
        },
        {
            userId: 4,
            followed: false,
            userFirstName: "Pawel",
            userSecondName: "Goral",
            status: "Front End Developer",
            location: {city: "Porto", country: "Portugal"}
        },
    ]

    if(usersInfo.users.length === 0) setUsersState(users)
    return (
        <div>
            {
                usersInfo && usersInfo.users.map(user => {
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