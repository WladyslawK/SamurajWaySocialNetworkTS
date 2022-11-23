import React from 'react';
import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogType = {
    name: string
    id: number
}

export const Dialog: React.FC<DialogType> = ({name, id}) => {
    return (
        <div className={styles.dialogs__item}>
            <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>{name}</NavLink>
        </div>
    );
};
