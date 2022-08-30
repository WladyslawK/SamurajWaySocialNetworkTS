import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types";



const Profile: React.FC<ProfileType> = ({postsData}) => {
    return (
        <>
            <ProfileInfo img={"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"}/>
            <MyPosts postsData={postsData}/>
        </>
    );
};

export default Profile;