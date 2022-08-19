import React from 'react';
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <>
            <div className={s.content}>
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="img"/>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New post
                    </div>
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </>
    );
};

export default Profile;