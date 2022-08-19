import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <>
            <div className={s.content}>
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="img"/>
                <MyPosts/>
            </div>
        </>
    );
};

export default Profile;