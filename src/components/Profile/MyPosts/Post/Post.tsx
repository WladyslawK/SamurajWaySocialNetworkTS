import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
}

const Post = ({message}: PostPropsType) => {
    return (
        <>
            <div className={s.item}>
                <img src="https://fera.pl/images/companies/1/charakter%20mopsa.jpg?1604065618661" alt="avatar"/>
                {message}
                <div>
                    like
                </div>
            </div>
        </>
    );
};

export default Post;