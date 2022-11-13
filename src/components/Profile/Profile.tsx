import React from 'react';
import {ProfileType} from "../../consts vs types/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";




export const Profile: React.FC<ProfileType> = ({userProfile,status, ...restProps}) => {
    return (
        <>
            <ProfileInfo
                img={"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"} userProfile={userProfile}
                status={status}
                updateStatus={restProps.updateStatus}
            />
            <MyPostsContainer/>
        </>
    );
};