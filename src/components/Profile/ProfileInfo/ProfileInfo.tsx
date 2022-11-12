import React from 'react';
import styles from "./ProfileInfo.module.css"
import {UsersProfileType} from "../../../Redux/profilePageReducer";
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

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
            {/*<div>
                <img src={img} alt="img"/>
            </div>*/}

            <div className={styles.description}>
                <img style={{width: "80px", height: "80px", borderRadius: "50%"}}
                     src={userProfile.photos.small}
                     alt="logo"/>
                <br/>
                <div>
                    <ProfileStatus status={"Hello My Friends"}/>
                </div>
                {userProfile &&
                    <div>
                        <h2>{userProfile.fullName}</h2>
                        <span>{userProfile.aboutMe}</span><br/>
                        <span>Looking for a job: <span>{userProfile.lookingForAJobDescription}</span></span>
                        <div>
                            <h3>Contacts</h3>
                            <p>
                                Facebook: {userProfile.contacts.facebook ? userProfile.contacts.facebook : "no account"} <br/>
                                Website: {userProfile.contacts.website ? userProfile.contacts.website : "do not have a website"}<br/>
                                Instgram: {userProfile.contacts.instagram ? userProfile.contacts.instagram : "no account"}<br/>
                                GitHub: {userProfile.contacts.github ? userProfile.contacts.github : "no account"}<br/>
                                YouTube: {userProfile.contacts.youtube ? userProfile.contacts.youtube : "no account"}<br/>
                            </p>
                        </div>
                    </div>

                }
            </div>
        </div>

    );
};