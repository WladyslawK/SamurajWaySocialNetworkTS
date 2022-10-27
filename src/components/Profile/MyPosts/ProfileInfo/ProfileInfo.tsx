import React from 'react';
import styles from "./ProfileInfo.module.css"
import {UsersProfileType} from "../../../../Redux/profilePageReducer";
import {Preloader} from "../../../common/preloader/Preloader";

type ProfileInfoType = {
    img: string
    userProfile: UsersProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({img, userProfile}) => {

    if (!userProfile) {
        console.log("preloader")
        return <Preloader/>
    }
    console.log("rendered")

    return (
        <div className={styles.content}>
            <div>
                <img src={img} alt="img"/>
            </div>
            <div className={styles.description}>
                Ava + description
                <br/>
                <img style={{width: "80px", height: "80px", borderRadius: "50%"}} src={userProfile.photos.small}
                     alt="logo"/>
                <br/>
                {userProfile && userProfile.aboutMe}
            </div>
        </div>

    );
};