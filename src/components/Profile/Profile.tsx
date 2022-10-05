import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfileType} from "../../consts vs types/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";




const Profile: React.FC<ProfileType> = ({profilePage, dispatch}) => {
    return (
        <>
            <ProfileInfo img={"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"}/>
            <MyPostsContainer/>
        </>
    );
};

export default Profile;