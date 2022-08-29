import React from 'react';
import styles from "./ProfileInfo.module.css"

type ProfileInfoType = {
    img: string
}

const Profile: React.FC<ProfileInfoType> = ({img}) => {
    return (
        <div className={styles.content}>
            <div>
                <img src={img} alt="img"/>
            </div>
            <div className={styles.description}>
                Ava + description
            </div>
        </div>
    );
};

export default Profile;