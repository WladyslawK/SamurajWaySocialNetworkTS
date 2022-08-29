import React from 'react';
import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    path: string
}

export const Dialog: React.FC<DialogType> = ({name, path}) => {
    return (
        <div className={styles.dialogs__item}>
            <NavLink to={path} activeClassName={styles.active}>{name}</NavLink>
        </div>
    );
};
