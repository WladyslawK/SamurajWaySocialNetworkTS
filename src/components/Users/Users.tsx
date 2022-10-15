import React, {useEffect} from 'react';
import {UsersPageType, UsersType} from "../../Redux/usersReducer";
import style from "./Users.module.css"
import axios from "axios";

type UsersComponentType = {
    usersInfo: UsersPageType
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsersState: (users: UsersType[]) => void
}

export const Users: React.FC<UsersComponentType> = ({usersInfo, followUser, unfollowUser, setUsersState}) => {

    /*useEffect(()=> {

    }, [])*/

    const getUsers = () => {
        if (usersInfo.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => setUsersState(response.data.items))
            //setUsersState(users)
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                usersInfo && usersInfo.users.map(user => {
                    return (
                        <div className={style.userContainer} key={user.id}>
                            <span>
                                {user.photos.small !== null ? user.photos.small : <img
                                    src="https://tork.news/__export/1659017759401/sites/tork/img/2022/07/28/jason-statham-1200.jpg_718194491.jpg"
                                    alt="avatar"/>}

                            </span>
                            <div>
                                {user.followed
                                    ? <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
                                    : <button onClick={() => followUser(user.id)}>Follow</button>}
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