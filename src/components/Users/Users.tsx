import React from 'react';
import style from "./Users.module.css";
import axios from "axios";
import {UsersPageType, UsersType} from "../../Redux/usersReducer";

type UsersComponentType = {
    usersInfo: UsersPageType
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsersState: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersComponentType, {}> {

    constructor(props: UsersComponentType) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => this.props.setUsersState(response.data.items))

    }

    render() {
        return (
            <div>
                {
                    this.props.usersInfo && this.props.usersInfo.users.map(user => {
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
